import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
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
  const totalPosts = blogPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / PAGE_SIZE));

  if (page < 1 || page > totalPages) {
    return { title: 'GCDA Blog' };
  }

  const isFirstPage = page === 1;
  const title = isFirstPage
    ? 'GCDA Career Guidance Blog: 80 Definitive Guides'
    : `GCDA Blog Page ${page}`;
  const description = totalPosts === 0
    ? 'The GCDA blog is being refreshed. New career guidance articles will be published soon.'
    : isFirstPage
      ? `Career guidance blog with ${totalPosts} definitive guides on stream selection, courses, exams, working professionals, and career counselling.`
      : `GCDA Blog Page ${page} – ${totalPosts} definitive career guidance guides for students, parents, and professionals.`;
  const canonical = isFirstPage ? '/blog' : `/blog/p/${page}`;
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
          url: '/assets/service-illustration.webp',
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
          url: '/assets/service-illustration.webp',
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
  return (
    <>
      {currentPage > 1 && <link rel="prev" href={currentPage === 2 ? `${SITE_URL}/blog` : `${SITE_URL}/blog/p/${currentPage - 1}`} />}
      {currentPage < totalPages && <link rel="next" href={`${SITE_URL}/blog/p/${currentPage + 1}`} />}
    </>
  );
}

export default function BlogIndexPage({ searchParams }) {
  const rawPage = parseInt(searchParams?.page) || 1;
  const totalPosts = blogPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / PAGE_SIZE));

  if (isNaN(rawPage) || rawPage < 1 || rawPage > totalPages) {
    notFound();
  }

  if (rawPage > 1) {
    redirect(`/blog/p/${rawPage}`);
  }

  const currentPage = 1;
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentPosts = blogPosts.slice(start, end);
  const hasPosts = totalPosts > 0;

  const pageUrl = `${SITE_URL}/blog`;

  return (
    <>
      <PaginationMeta currentPage={currentPage} totalPages={totalPages} />

      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]} />
            <span className="eyebrow">GCDA Blog</span>
            <h1>{hasPosts ? 'Career guidance, written for Indian students, parents, and professionals.' : 'The GCDA blog is being refreshed.'}</h1>
            <p className="page-hero-copy">
              {hasPosts
                ? `Practical, India-specific career guidance — covering stream selection after 10th, degree choices after 12th, exam planning, career growth, working professional decisions, and career counselling. ${totalPosts} definitive guides, prepared for 2027 decisions – page ${currentPage} of ${totalPages}.`
                : 'We have removed the current blog library and are preparing a new curated set of articles. Please check back soon for updated career guidance content.'}
            </p>
            <ul className="hero-proof" aria-label="Blog overview">
              <li>{totalPosts} published guides</li>
              <li>Page {currentPage} of {totalPages}</li>
              <li>{hasPosts ? `${Math.max(blogCategories.length - 1, 0)} categories` : 'New content coming soon'}</li>
            </ul>
          </div>
          <div className="surface-card media-card">
            <Image
              src="/assets/service-illustration.webp"
              alt="GCDA career guidance blog"
              width={1200}
              height={896}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1180px) 50vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={hasPosts ? 'Categories' : 'Status'}
            title={hasPosts ? 'Browse by topic' : 'No blog posts are currently published'}
            description={hasPosts ? 'All blog posts are written for Indian students, parents, and professionals. Click a category to filter (coming soon) – currently showing all categories with pagination.' : 'The blog section is still live, but all current posts have been removed. Fresh curated articles can be added here later without rebuilding the whole feature.'}
            center
          />
          {hasPosts ? (
            <>
              <ul className="category-chips" aria-label="Blog categories">
                {blogCategories.map((cat) => (
                  <li key={cat} className={`chip ${cat === 'All' ? 'chip-active' : ''}`}>
                    {cat}
                  </li>
                ))}
              </ul>
              <p style={{ textAlign: 'center', marginTop: '0.8rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                Showing {start + 1}–{Math.min(end, totalPosts)} of {totalPosts} articles
              </p>
            </>
          ) : null}
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow={hasPosts ? (currentPage === 1 ? 'Latest posts' : `Page ${currentPage} – All posts`) : 'Coming soon'}
            title={hasPosts ? (currentPage === 1 ? 'Recent career guidance articles' : `Career guidance – Page ${currentPage}`) : 'We’re preparing a new blog library'}
            description={
              hasPosts
                ? currentPage === 1
                  ? `Read the latest from the GCDA editorial team – 20 per page, ${totalPosts} total, SEO optimized pagination.`
                  : `Page ${currentPage} of ${totalPages} – Continue reading practical, India-specific career guidance from GCDA.`
                : 'Once a new curated set of articles is ready, it will appear here.'
            }
          />
          {hasPosts ? (
            <>
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
            </>
          ) : (
            <div className="narrow-center" style={{ textAlign: 'center' }}>
              <p>No blog posts are published right now.</p>
              <p style={{ color: 'var(--muted)' }}>You can still contact GCDA directly for personalised career guidance.</p>
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
              ? 'GCDA Career Guidance Blog: 80 Definitive Guides'
              : `GCDA Career Guidance Blog: Page ${currentPage}`,
          description:
            currentPage === 1
              ? `Practical, India-specific career guidance across ${totalPosts} definitive guides.`
              : `Page ${currentPage} of GCDA career guidance blog – ${totalPosts} definitive guides.`,
          primaryImage: `${SITE_URL}/assets/service-illustration.webp`,
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
