import Image from 'next/image';
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
const PAGE_SIZE = 20;

export function generateStaticParams() {
  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);
  const params = [];
  for (let i = 2; i <= totalPages; i++) {
    params.push({ page: String(i) });
  }
  return params;
}

export async function generateMetadata({ params }) {
  const page = parseInt(params?.page) || 2;
  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);

  if (isNaN(page) || page < 2 || page > totalPages) {
    return { title: 'Page not found – GCDA Blog' };
  }

  const title = `GCDA Blog Page ${page}`;
  const description = `GCDA Blog Page ${page} – ${blogPosts.length} definitive guides on stream selection, courses, exams, career growth, and counselling.`;
  const canonical = `/blog/p/${page}`;
  const url = `${SITE_URL}${canonical}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description: `Page ${page} – Practical career guidance blog from GCDA editorial team.`,
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
      description: `Page ${page} – Career guidance guides from GCDA.`,
      images: [
        {
          url: '/assets/service-illustration.webp',
          width: 1200,
          height: 630,
          alt: `GCDA career guidance blog – Page ${page}`,
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

function Pagination({ currentPage, totalPages }) {
  const getPageUrl = (page) => (page === 1 ? '/blog' : `/blog/p/${page}`);

  const pages = [];
  const delta = 1;
  const left = Math.max(2, currentPage - delta);
  const right = Math.min(totalPages - 1, currentPage + delta);

  pages.push(1);
  if (left > 2) pages.push('ellipsis-left');
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < totalPages - 1) pages.push('ellipsis-right');
  if (totalPages > 1) pages.push(totalPages);

  return (
    <nav className="pagination" aria-label="Blog pagination">
      <div className="pagination-info">
        Page {currentPage} of {totalPages} – {blogPosts.length} articles
      </div>
      <div className="pagination-links">
        {currentPage > 1 ? (
          <Link href={getPageUrl(currentPage - 1)} className="pagination-link pagination-prev">
            ← Previous
          </Link>
        ) : (
          <span className="pagination-link pagination-prev pagination-disabled">← Previous</span>
        )}
        <div className="pagination-numbers">
          {pages.map((p, idx) => {
            if (typeof p === 'string')
              return (
                <span key={`${p}-${idx}`} className="pagination-ellipsis">
                  …
                </span>
              );
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
          <Link href={getPageUrl(currentPage + 1)} className="pagination-link pagination-next">
            Next →
          </Link>
        ) : (
          <span className="pagination-link pagination-next pagination-disabled">Next →</span>
        )}
      </div>
    </nav>
  );
}

export default function BlogPaginatedPage({ params }) {
  const currentPage = parseInt(params?.page) || 2;
  const totalPages = Math.ceil(blogPosts.length / PAGE_SIZE);

  if (isNaN(currentPage) || currentPage < 2 || currentPage > totalPages) {
    notFound();
  }

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentPosts = blogPosts.slice(start, end);
  const pageUrl = `${SITE_URL}/blog/p/${currentPage}`;

  const blogBreadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: `Page ${currentPage}`, url: `/blog/p/${currentPage}` },
  ];

  return (
    <>
      <link rel="prev" href={currentPage === 2 ? `${SITE_URL}/blog` : `${SITE_URL}/blog/p/${currentPage - 1}`} />
      {currentPage < totalPages && <link rel="next" href={`${SITE_URL}/blog/p/${currentPage + 1}`} />}

      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: `Page ${currentPage}`, url: `/blog/p/${currentPage}` }]} />
            <span className="eyebrow">GCDA Blog – Page {currentPage} of {totalPages}</span>
            <h1>{`Career guidance blog – Page ${currentPage}`}</h1>
            <p className="page-hero-copy">
              Page {currentPage} of {totalPages} – {blogPosts.length} practical, India-specific career guidance guides for 2027 decisions. Continue reading stream selection, course planning, exam strategy, working professional, and counselling content.
            </p>
            <ul className="hero-proof" aria-label="Blog page overview">
              <li>{blogPosts.length} total guides</li>
              <li>{`Page ${currentPage} of ${totalPages}`}</li>
              <li>{`${Math.max(blogCategories.length - 1, 0)} categories`}</li>
            </ul>
          </div>
          <div className="surface-card media-card">
            <Image
              src="/assets/service-illustration.webp"
              alt={`GCDA career guidance blog – Page ${currentPage}`}
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
            eyebrow="Categories"
            title="Browse by topic"
            description={`Page ${currentPage} – Definitive, India-specific guides for students, parents, and working professionals.`}
            center
          />
          <ul className="category-chips" aria-label="Blog categories">
            {blogCategories.map((cat) => (
              <li key={cat} className={`chip ${cat === 'All' ? 'chip-active' : ''}`}>
                {cat}
              </li>
            ))}
          </ul>
          <p style={{ textAlign: 'center', marginTop: '0.8rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
            Showing {start + 1}–{Math.min(end, blogPosts.length)} of {blogPosts.length} articles
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow={`Page ${currentPage} – All posts`}
            title={`Career guidance – Page ${currentPage}`}
            description={`Page ${currentPage} of ${totalPages} – Continue reading practical, India-specific career guidance from GCDA.`}
          />
          <div className="card-grid blog-grid">
            {currentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
          <div className="center-cta" style={{ marginTop: '1.5rem' }}>
            <Link href="/blog" className="text-link">
              ← Back to first page
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Want personalised guidance?" description="Articles are a great start. For a 1-on-1 plan tailored to your situation, speak to a GCDA counsellor." />

      <JsonLd id="ld-breadcrumb-blog-p" data={breadcrumbSchema(blogBreadcrumbs)} />
      <JsonLd id="ld-blog-list-p" data={blogListSchema(currentPosts)} />
      <JsonLd
        id="ld-webpage-blog-p"
        data={webPageSchema({
          url: pageUrl,
          name: `GCDA Career Guidance Blog: Page ${currentPage}`,
          description: `Page ${currentPage} of GCDA career guidance blog – ${blogPosts.length} definitive guides.`,
          primaryImage: `${SITE_URL}/assets/service-illustration.webp`,
        })}
      />
      <JsonLd
        id="ld-itemlist-blog-p"
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
