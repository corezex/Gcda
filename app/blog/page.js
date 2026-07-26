import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import BlogCard from '@/components/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts, blogCategories } from '@/data/blog';

export const metadata = {
  title: 'Career Guidance Blog | GCDA India',
  description:
    'Practical, India-specific career guidance for students, parents, and working professionals. Read GCDA blog posts on stream selection, degree planning, JEE/NEET, MBA, and career transitions.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Career Guidance Blog | GCDA India',
    description:
      'Practical, India-specific career guidance for students, parents, and working professionals.',
    url: 'https://gcdassociation.org/blog',
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]} />
            <span className="eyebrow">GCDA Blog</span>
            <h1>Career guidance, written for Indian students, parents, and professionals.</h1>
            <p>
              Practical, India-specific career guidance — covering stream selection after 10th, degree choices after 12th, JEE/NEET planning, MBA, career transitions, and working professional growth. Every post is structured for quick reading and lasting clarity.
            </p>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/service-illustration.gif" alt="GCDA career guidance blog" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Categories"
            title="Browse by topic"
            description="All blog posts are written for Indian students, parents, and professionals. Pick a category to filter."
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
    </>
  );
}
