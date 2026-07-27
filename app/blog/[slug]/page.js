import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlogCard from '@/components/BlogCard';
import JsonLd from '@/components/JsonLd';
import { getAllBlogSlugs, getBlogPostBySlug, getRelatedPosts } from '@/data/blog';
import { faqSchema, articleSchema, breadcrumbSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export function generateStaticParams() {
  return getAllBlogSlugs();
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article not found' };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: post.image || '/assets/service-illustration.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image || '/assets/service-illustration.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = getRelatedPosts(post.slug, 3);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      <article>
        <section className="page-hero">
          <div className="container narrow-center">
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-meta">
              <span>By {post.author}</span>
              <span aria-hidden="true">•</span>
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span aria-hidden="true">•</span>
              <span>{post.readTime}</span>
            </p>
          </div>
        </section>

        <section className="section section-tight-top">
          <div className="container narrow-center">
            <AnswerBlock>{post.answerBlock}</AnswerBlock>
          </div>
        </section>

        <section className="section section-tight-top">
          <div className="container narrow-center">
            {post.sections.map((section) => (
              <div key={section.heading} className="article-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            {post.keyTakeaways && post.keyTakeaways.length > 0 ? (
              <div className="key-takeaways">
                <h2>Key Takeaways</h2>
                <ul>
                  {post.keyTakeaways.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        {post.faqs && post.faqs.length > 0 ? (
          <section className="section alt-section">
            <div className="container narrow-center">
              <SectionHeader
                eyebrow="FAQs"
                title="Frequently asked questions"
                description="Common questions related to this guide."
                center
              />
              <FAQList items={post.faqs} />
            </div>
            <JsonLd id={`ld-faq-${post.slug}`} data={faqSchema(post.faqs)} />
          </section>
        ) : null}
      </article>

      {related.length > 0 ? (
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Related reading"
              title="Continue with these guides"
              description="More practical, India-specific career guidance from the GCDA blog."
            />
            <div className="card-grid blog-grid">
              {related.map((rel) => (
                <BlogCard key={rel.slug} post={rel} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title="Need a personalised plan?"
        description="Articles are a great starting point. For a 1-on-1 structured plan, talk to a GCDA counsellor."
      />

      <JsonLd id={`ld-article-${post.slug}`} data={articleSchema(post, url)} />
      <JsonLd id={`ld-breadcrumb-${post.slug}`} data={breadcrumbSchema(breadcrumbs)} />
    </>
  );
}
