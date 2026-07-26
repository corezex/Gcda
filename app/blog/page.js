import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import BlogCard from '@/components/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { blogPosts, blogCategories } from '@/data/blog';
import { blogListSchema, breadcrumbSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  title: 'Career Guidance Blog India: Stream, Degree, MBA, JEE/NEET',
  description:
    'Practical, India-specific career guidance for students, parents, and working professionals. Read GCDA blog posts on stream selection after 10th, degree choices after 12th, JEE/NEET planning, MBA, career transitions, and working professional growth.',
  keywords: [
    'career guidance blog India',
    'career options after 12th',
    'stream selection after 10th',
    'career after B.Tech',
    'career after graduation',
    'JEE preparation',
    'NEET preparation',
    'data science career India',
    'MBA for working professionals',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Career Guidance Blog India: Stream, Degree, MBA, JEE/NEET',
    description: 'Practical, India-specific career guidance for students, parents, and working professionals.',
    url: 'https://gcdassociation.org/blog',
    images: [
      {
        url: '/assets/service-illustration.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career guidance blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Guidance Blog India: Stream, Degree, MBA, JEE/NEET',
    description: 'Practical, India-specific career guidance from the GCDA editorial team.',
  },
};

const blogBreadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
];

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]} />
            <span className="eyebrow">GCDA Blog</span>
            <h1>Career guidance, written for Indian students, parents, and professionals.</h1>
            <p className="page-hero-copy">
              Practical, India-specific career guidance — covering stream selection after 10th, degree choices after 12th, JEE/NEET planning, MBA, career transitions, and working professional growth.
            </p>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/service-illustration.png" alt="GCDA career guidance blog" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Categories"
            title="Browse by topic"
            description="All blog posts are written for Indian students, parents, and professionals."
            center
          />
          <div className="category-chips">
            {blogCategories.map((cat) => (
              <span key={cat} className={`chip ${cat === 'All' ? 'chip-active' : ''}`}>{cat}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Latest posts"
            title="Recent career guidance articles"
            description="Read the latest from the GCDA editorial team."
          />
          <div className="card-grid blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want personalised guidance?"
        description="Articles are a great start. For a 1-on-1 plan tailored to your situation, speak to a GCDA counsellor."
      />

      <JsonLd id="ld-breadcrumb-blog" data={breadcrumbSchema(blogBreadcrumbs)} />
      <JsonLd id="ld-blog-list" data={blogListSchema(blogPosts)} />
    </>
  );
}
