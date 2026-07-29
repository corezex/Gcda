import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, personSchema, authorPageSchema, webPageSchema } from '@/data/schema';
import { blogPosts } from '@/data/blog';
import BlogCard from '@/components/BlogCard';

const SITE_URL = 'https://gcdassociation.org';
const url = `${SITE_URL}/author/gcda-editorial-team`;

export const metadata = {
  title: 'GCDA Editorial Team – Career Counselling Experts',
  description:
    'GCDA Editorial Team – certified counsellors, psychologists, 10+ years, 50K+ sessions across 438 cities since 2013.',
  keywords: [
    'GCDA Editorial Team',
    'career counselling experts',
    'career guidance authors',
    'GCDA authors',
    'career counselling team India',
  ],
  alternates: { canonical: '/author/gcda-editorial-team' },
  openGraph: {
    title: 'GCDA Editorial Team – Career Counselling Experts',
    description:
      'Certified counsellors & psychologists guiding 50K+ students across 438 cities since 2013.',
    url,
    type: 'profile',
    images: [
      {
        url: '/assets/logo.webp',
        width: 600,
        height: 600,
        alt: 'GCDA Editorial Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCDA Editorial Team – Career Counselling Experts',
    description: 'Certified counsellors guiding 50K+ students across India since 2013.',
    images: [
      {
        url: '/assets/logo.webp',
        width: 600,
        height: 600,
        alt: 'GCDA Editorial Team',
      },
    ],
  },
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'GCDA Editorial Team', url: '/author/gcda-editorial-team' },
];

export default function AuthorPage() {
  const posts = blogPosts;
  const hasPosts = posts.length > 0;
  const latestPosts = posts
    .slice()
    .sort((a, b) => new Date(b.dateModified) - new Date(a.dateModified))
    .slice(0, 5);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">Author Profile</span>
            <h1>GCDA Editorial Team – Career Counselling Experts</h1>
            <p className="page-hero-copy">
              Certified career counsellors, psychologists, and education experts with 10+ years of field experience.
              We have guided 50,000+ students, parents, and working professionals across 438 Indian cities since 2013
              through structured assessments, mentor-led counselling, and practical roadmaps.
            </p>
            <div className="button-row">
              <Link href="/about" className="button button-primary">About GCDA</Link>
              <Link href="/contact" className="button button-secondary">Contact Us</Link>
            </div>
            <div className="hero-proof">
              <span>50K+ career sessions</span>
              <span>5K+ certified counsellors</span>
              <span>10+ years experience</span>
              <span>98% satisfaction</span>
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/logo.webp" alt="GCDA Editorial Team – career counselling experts" width="1024" height="1024" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="Our expertise"
              title="What we know about"
              description="Our editorial expertise spans the full Indian career decision journey, from stream selection after 10th to working professional transitions."
            />
            <ul className="bullet-list">
              <li><strong>Career Counselling & Assessment:</strong> RIASEC-style interest, Big-Five personality, aptitude batteries – psychologist scored</li>
              <li><strong>Stream Selection after 10th:</strong> Science, Commerce, Arts, polytechnic, diploma – family alignment</li>
              <li><strong>Degree Selection after 12th:</strong> Engineering, medical, design, law, commerce, liberal arts – 6-10 college shortlist</li>
              <li><strong>JEE/NEET Planning:</strong> 12-month prep calendar, mock analysis, mistake journal</li>
              <li><strong>MBA Counselling:</strong> CAT/XAT/GMAT, IIM/ISB, SOP, interview prep, working professional MBA</li>
              <li><strong>Career Transitions:</strong> Domain switch, lateral move, promotion, freelancing, entrepreneurship</li>
              <li><strong>Workshops & Seminars:</strong> 4 tracks – Career Counselling, Self Management, Emotional Intelligence, Leadership</li>
            </ul>
            <p className="inline-link-row">
              Explore our <Link href="/career-counselling/personal-counselling" className="text-link">personal counselling</Link>,{' '}
              <Link href="/career-counselling/career-assessment" className="text-link">career assessment</Link>,{' '}
              <Link href="/blog" className="text-link">blog</Link> and{' '}
              <Link href="/career-counselling" className="text-link">all services</Link>.
            </p>
          </div>
          <div className="info-panel">
            <h3>Author credentials</h3>
            <ul className="bullet-list compact">
              <li><strong>Experience:</strong> 50K+ sessions delivered across 438 cities</li>
              <li><strong>Network:</strong> 5K+ certified counsellors trained in GCDA framework</li>
              <li><strong>Expertise:</strong> RIASEC, Big-Five, validated aptitude instruments</li>
              <li><strong>Authority:</strong> Entity in Google Knowledge Graph via Organization schema sameAs</li>
              <li><strong>Trust:</strong> Editorial checklist – 2026 salary/exam data, balanced view, family-friendly language, correction policy</li>
              <li><strong>Founding:</strong> 2013 – Mumbai HQ</li>
              <li><strong>Languages:</strong> English, Hindi, Marathi, Tamil, Telugu, Kannada, Bengali, Gujarati</li>
            </ul>
            <div className="mini-contact-card">
              <a href={`mailto:gcda.career@gmail.com`}>gcda.career@gmail.com</a>
              <a href={`tel:919136005039`}>+91 91360 05039</a>
              <span>102, Citi Mall, Andheri West, Mumbai 400053</span>
            </div>
            <div className="social-links" style={{ marginTop: '1rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <a href="https://www.facebook.com/gcdaindia" target="_blank" rel="noreferrer" className="text-link">Facebook</a>
              <a href="https://www.instagram.com/gcdaindia" target="_blank" rel="noreferrer" className="text-link">Instagram</a>
              <a href="https://www.linkedin.com/company/global-career-development-association/" target="_blank" rel="noreferrer" className="text-link">LinkedIn</a>
              <a href="https://twitter.com/gcdaindia" target="_blank" rel="noreferrer" className="text-link">Twitter</a>
              <a href="https://www.youtube.com/watch?v=ZQYxaC0pnZY" target="_blank" rel="noreferrer" className="text-link">YouTube</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Latest articles"
            title="Recent career guidance from GCDA Editorial Team"
            description={hasPosts ? `Showing the latest 5 of ${posts.length} curated guides across stream selection, courses, exams, working professionals, and career counselling.` : 'There are no published GCDA blog articles right now. New curated content can be added later.'}
            center
          />
          {hasPosts ? (
            <>
              <div className="card-grid blog-grid">
                {latestPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              <div className="center-cta" style={{ marginTop: '1.5rem' }}>
                <Link href="/blog" className="button button-secondary">View All Blogs</Link>
              </div>
            </>
          ) : (
            <div className="narrow-center" style={{ textAlign: 'center' }}>
              <p>The editorial team page remains live, but all current blog posts have been removed.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container narrow-center">
          <SectionHeader eyebrow="Editorial Standards" title="How we keep content honest and useful" center />
          <div className="stack-list">
            <article className="feature-row">
              <h3>Reviewed against 2026 data</h3>
              <p>Salary bands, entrance exam cutoffs, college criteria, and emerging careers refreshed every 6 months – not stale 2018 data.</p>
            </article>
            <article className="feature-row">
              <h3>Balanced view of options</h3>
              <p>Every article presents alternatives honestly – we show Plan A and Plan B, not just one path.</p>
            </article>
            <article className="feature-row">
              <h3>Family-friendly language</h3>
              <p>Parent + student readable – no jargon without explanation, no motivational fluff.</p>
            </article>
            <article className="feature-row">
              <h3>Correction policy</h3>
              <p>If we get something wrong, we correct it publicly and update dateModified – seen in Article schema.</p>
            </article>
          </div>
        </div>
      </section>

      <JsonLd id="ld-breadcrumb-author" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id="ld-person-author" data={personSchema()} />
      <JsonLd id="ld-profile-author" data={authorPageSchema()} />
      <JsonLd
        id="ld-webpage-author"
        data={webPageSchema({
          url,
          name: 'GCDA Editorial Team – Career Counselling Experts',
          description: 'Certified career counsellors & psychologists guiding 50K+ students across 438 cities since 2013.',
          primaryImage: `${SITE_URL}/assets/logo.webp`,
        })}
      />
    </>
  );
}
