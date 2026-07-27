import Link from 'next/link';
import { notFound } from 'next/navigation';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import BlogCard from '@/components/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { blogPosts, blogCategories } from '@/data/blog';
import { blogListSchema, breadcrumbSchema, webPageSchema, itemListSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';
const PAGE_SIZE = 20; // 310 posts => 16 pages

const blogBreadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
];

export async function generateMetadata({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;
  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);

  if (page < 1 || page > totalPages) {
    return { title: 'Page not found – GCDA Blog' };
  }

  const isFirstPage = page === 1;
  const title = isFirstPage
    ? 'Career Guidance Blog India: Stream, Degree, MBA, JEE/NEET'
    : `Career Guidance Blog India: Page ${page} – Stream, Degree, MBA, JEE/NEET`;
  const description = isFirstPage
    ? 'Practical, India-specific career guidance for students, parents, and working professionals. Read GCDA blog posts on stream selection after 10th, degree choices after 12th, JEE/NEET planning, MBA, career transitions, and working professional growth.'
    : `Page ${page} of GCDA career guidance blog – ${blogPosts.length} articles on stream selection, degree choices, JEE/NEET, MBA, career growth. Practical guides for Indian students, parents, and professionals.`;
  const canonical = isFirstPage ? '/blog' : `/blog?page=${page}`;
  const url = `${SITE_URL}${canonical}`;

  return {
    title,
    description,
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
    alternates: { canonical },
    openGraph: {
      title,
      description: isFirstPage
        ? 'Practical, India-specific career guidance for students, parents, and working professionals.'
        : `Page ${page} – Practical career guidance blog from GCDA editorial team.`,
      url,
      images: [
        {
          url: '/assets/service-illustration.png',
          width: 1200,
          height: 630,
          alt: `GCDA career guidance blog – Page ${page}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: isFirstPage
        ? 'Practical, India-specific career guidance from the GCDA editorial team.'
        : `Page ${page} – Career guidance guides from GCDA.`,
      images: [
        {
          url: '/assets/service-illustration.png',
          width: 1200,
          height: 630,
          alt: `GCDA career guidance blog – Page ${page}`,
        },
      ],
    },
    // For pagination SEO, we add custom meta for robots – allow indexing
    robots: {
      index: true,
      follow: true,
    },
  };
}

function Pagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page) => (page === 1 ? '/blog' : `/blog/p/${page}`);

  // Generate page numbers with ellipsis
  const pages = [];
  const delta = 1;
  const left = Math.max(2, currentPage - delta);
  const right = Math.min(totalPages - 1, currentPage + delta);

  pages.push(1);
  if (left > 2) pages.push('ellipsis-left');
  for (let i = left; i <= right; i++) {
    pages.push(i);
  }
  if (right < totalPages - 1) pages.push('ellipsis-right');
  if (totalPages > 1) pages.push(totalPages);

  return (
    <nav className="pagination" aria-label="Blog pagination">
      <div className="pagination-info">
        Page {currentPage} of {totalPages} – {blogPosts.length} articles
      </div>
      <div className="pagination-links">
        {currentPage > 1 ? (
          <Link href={getPageUrl(currentPage - 1)} className="pagination-link pagination-prev" aria-label="Previous page">
            ← Previous
          </Link>
        ) : (
          <span className="pagination-link pagination-prev pagination-disabled" aria-disabled="true">
            ← Previous
          </span>
        )}

        <div className="pagination-numbers">
          {pages.map((p, idx) => {
            if (typeof p === 'string') {
              return (
                <span key={`${p}-${idx}`} className="pagination-ellipsis">
                  …
                </span>
              );
            }
            const isCurrent = p === currentPage;
            return isCurrent ? (
              <span key={p} className="pagination-number pagination-current" aria-current="page">
                {p}
              </span>
            ) : (
              <Link key={p} href={getPageUrl(p)} className="pagination-number" aria-label={`Go to page ${p}`}>
                {p}
              </Link>
            );
          })}
        </div>

        {currentPage < totalPages ? (
          <Link href={getPageUrl(currentPage + 1)} className="pagination-link pagination-next" aria-label="Next page">
            Next →
          </Link>
        ) : (
          <span className="pagination-link pagination-next pagination-disabled" aria-disabled="true">
            Next →
          </span>
        )}
      </div>
    </nav>
  );
}

function PaginationMeta({ currentPage, totalPages }) {
  // SEO: rel prev/next links (Google deprecated but Bing still uses, also for crawlers)
  return (
    <>
      {currentPage > 1 && <link rel="prev" href={currentPage === 2 ? `${SITE_URL}/blog` : `${SITE_URL}/blog/p/${currentPage - 1}`} />}
      {currentPage < totalPages && <link rel="next" href={`${SITE_URL}/blog/p/${currentPage + 1}`} />}
      {currentPage > 1 && <link rel="canonical" href={`${SITE_URL}/blog?page=${currentPage}`} />}
    </>
  );
}

export default function BlogIndexPage({ searchParams }) {
  const rawPage = parseInt(searchParams?.page) || 1;
  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);

  if (isNaN(rawPage) || rawPage < 1 || rawPage > totalPages) {
    notFound();
  }

  const currentPage = rawPage;
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentPosts = blogPosts.slice(start, end);

  const pageUrl = currentPage === 1 ? `${SITE_URL}/blog` : `${SITE_URL}/blog?page=${currentPage}`;

  return (
    <>
      <PaginationMeta currentPage={currentPage} totalPages={totalPages} />

      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]} />
            <span className="eyebrow">GCDA Blog – {blogPosts.length} articles</span>
            <h1>Career guidance, written for Indian students, parents, and professionals.</h1>
            <p className="page-hero-copy">
              Practical, India-specific career guidance — covering stream selection after 10th, degree choices after
              12th, JEE/NEET planning, MBA, career transitions, and working professional growth. {blogPosts.length}{' '}
              guides, updated for 2026 – page {currentPage} of {totalPages}.
            </p>
            <div className="hero-proof">
              <span>{blogPosts.length} total guides</span>
              <span>Page {currentPage} of {totalPages}</span>
              <span>10 categories</span>
            </div>
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
            description="All blog posts are written for Indian students, parents, and professionals. Click a category to filter (coming soon) – currently showing all categories with pagination."
            center
          />
          <div className="category-chips">
            {blogCategories.map((cat) => (
              <span key={cat} className={`chip ${cat === 'All' ? 'chip-active' : ''}`}>
                {cat}
              </span>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '0.8rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
            Showing {start + 1}–{Math.min(end, blogPosts.length)} of {blogPosts.length} articles
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow={currentPage === 1 ? 'Latest posts' : `Page ${currentPage} – All posts`}
            title={currentPage === 1 ? 'Recent career guidance articles' : `Career guidance – Page ${currentPage}`}
            description={
              currentPage === 1
                ? 'Read the latest from the GCDA editorial team – 20 per page, 310+ total, SEO optimized pagination.'
                : `Page ${currentPage} of ${totalPages} – Continue reading practical, India-specific career guidance from GCDA.`
            }
          />
          <div className="card-grid blog-grid">
            {currentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} />

          {currentPage > 1 && (
            <div className="center-cta" style={{ marginTop: '1.5rem' }}>
              <Link href="/blog" className="text-link">
                ← Back to first page
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want personalised guidance?"
        description="Articles are a great start. For a 1-on-1 plan tailored to your situation, speak to a GCDA counsellor."
      />

      <JsonLd id="ld-breadcrumb-blog" data={breadcrumbSchema(blogBreadcrumbs)} />
      <JsonLd id="ld-blog-list" data={blogListSchema(currentPosts)} />
      <JsonLd
        id="ld-webpage-blog"
        data={webPageSchema({
          url: pageUrl,
          name:
            currentPage === 1
              ? 'Career Guidance Blog India: Stream, Degree, MBA, JEE/NEET'
              : `Career Guidance Blog India: Page ${currentPage}`,
          description:
            currentPage === 1
              ? 'Practical, India-specific career guidance for students, parents, and working professionals.'
              : `Page ${currentPage} of GCDA career guidance blog – ${blogPosts.length} articles.`,
          primaryImage: `${SITE_URL}/assets/service-illustration.png`,
        })}
      />
      <JsonLd
        id="ld-itemlist-blog"
        data={itemListSchema({
          url: pageUrl,
          name: `GCDA Career Guidance Blog – Page ${currentPage}`,
          description: `Page ${currentPage} of ${totalPages} – ${currentPosts.length} career guidance articles`,
          items: currentPosts.map((post) => ({
            name: post.title,
            url: `${SITE_URL}/blog/${post.slug}`,
            description: post.description.slice(0, 120),
          })),
        })}
      />
    </>
  );
}
