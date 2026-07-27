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
import { faqSchema, articleSchema, breadcrumbSchema, speakableSchema, personSchema } from '@/data/schema';

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

// Auto-link keywords to services for internal linking (AEO/GEO)
const LINK_MAP = [
  { keyword: 'stream selection', href: '/career-counselling/stream-selection-guidance', label: 'stream selection' },
  { keyword: 'degree selection', href: '/career-counselling/degree-selection-guidance', label: 'degree selection' },
  { keyword: 'career assessment', href: '/career-counselling/career-assessment', label: 'career assessment' },
  { keyword: 'personal counselling', href: '/career-counselling/personal-counselling', label: 'personal counselling' },
  { keyword: 'working professional', href: '/career-counselling/working-professionals-guidance', label: 'working professional guidance' },
  { keyword: 'career counselling', href: '/career-counselling', label: 'career counselling' },
  { keyword: 'career counsellor', href: '/career-counselling', label: 'career counsellor' },
];

function renderParagraphWithLinks(text, paraIndex) {
  // Only auto-link first 2 matches per paragraph to avoid over-linking
  let remaining = text;
  const nodes = [];
  let linkCount = 0;
  const lower = remaining.toLowerCase();

  // Sort by keyword length desc to prefer longer phrases
  const sortedMap = [...LINK_MAP].sort((a, b) => b.keyword.length - a.keyword.length);

  // Find first 2 keywords that appear
  for (const entry of sortedMap) {
    if (linkCount >= 2) break;
    const idx = remaining.toLowerCase().indexOf(entry.keyword);
    if (idx !== -1) {
      const before = remaining.slice(0, idx);
      const match = remaining.slice(idx, idx + entry.keyword.length);
      const after = remaining.slice(idx + entry.keyword.length);
      if (before) nodes.push(before);
      nodes.push(
        <Link key={`link-${paraIndex}-${linkCount}`} href={entry.href} className="text-link">
          {match}
        </Link>
      );
      remaining = after;
      linkCount++;
    }
  }
  if (remaining) nodes.push(remaining);
  // If no links were added, just return original text nodes
  if (nodes.length === 0) return text;
  // Merge any remaining string at start if we broke early? Actually we already handled.
  // For simplicity, if we have nodes, we need to handle leftover original that might contain second link we missed because we mutated remaining only once per keyword.
  // We'll just join nodes as fragment
  return <>{nodes.map((n, i) => (typeof n === 'string' ? <span key={`t-${paraIndex}-${i}`}>{n}</span> : n))}</>;
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
              <span>
                By{' '}
                <Link href="/author/gcda-editorial-team" className="text-link">
                  {post.author}
                </Link>
              </span>
              <span aria-hidden="true">•</span>
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span aria-hidden="true">•</span>
              <span>{post.readTime}</span>
              <span aria-hidden="true">•</span>
              <span>Updated {new Date(post.dateModified).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </p>
            <div className="author-byline-note">
              <Link href="/author/gcda-editorial-team" className="text-link">
                About the author: GCDA Editorial Team – 10+ years, 50K+ sessions
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-tight-top">
          <div className="container narrow-center">
            <AnswerBlock>{post.answerBlock}</AnswerBlock>
          </div>
        </section>

        <section className="section section-tight-top">
          <div className="container narrow-center">
            {post.sections.map((section, sIdx) => (
              <div key={section.heading} className="article-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={`${sIdx}-${i}`}>{renderParagraphWithLinks(p, `${sIdx}-${i}`)}</p>
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

            <div className="related-services-in-article">
              <h3>Related GCDA Services</h3>
              <p>
                Need personalised help? Explore our{' '}
                <Link href="/career-counselling/personal-counselling" className="text-link">
                  personal counselling
                </Link>
                ,{' '}
                <Link href="/career-counselling/career-assessment" className="text-link">
                  career assessment
                </Link>
                ,{' '}
                <Link href="/career-counselling/stream-selection-guidance" className="text-link">
                  stream selection guidance
                </Link>
                , and{' '}
                <Link href="/career-counselling/working-professionals-guidance" className="text-link">
                  working professional guidance
                </Link>
                .
              </p>
            </div>
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
      <JsonLd id={`ld-speakable-${post.slug}`} data={speakableSchema({ url, name: post.title })} />
      <JsonLd id={`ld-person-${post.slug}`} data={personSchema()} />
    </>
  );
}
