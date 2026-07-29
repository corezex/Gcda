import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, itemListSchema, speakableSchema, webPageSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export function buildCityFeeMetadata(page) {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}/${page.slug}`,
      type: 'article',
      images: [
        {
          url: '/assets/career-6.webp',
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [
        {
          url: '/assets/career-6.webp',
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
  };
}

export default function CityFeePage({ page }) {
  const url = `${SITE_URL}/${page.slug}`;
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Plans', url: '/plan' },
    { name: page.title, url: `/${page.slug}` },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.h1}</h1>
            <p className="page-hero-copy">{page.heroCopy}</p>
            <div className="button-row">
              <Link href="/contact" className="button button-primary">Book a Consultation</Link>
              <Link href="/plan" className="button button-secondary">View National Plans</Link>
            </div>
            <div className="hero-proof">
              {page.quickStats.map((item) => (
                <span key={item.label}>{item.value}</span>
              ))}
            </div>
          </div>
          <div className="surface-card media-card">
            <img src="/assets/career-6.webp" alt={page.title} width="1376" height="768" loading="eager" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>{page.answerBlock}</AnswerBlock>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <SectionHeader
            eyebrow="Price comparison"
            title={`Career counselling fees in ${page.city.name} at a glance`}
            description={`Compare the 3 core GCDA plans for families and professionals in ${page.city.name}.`}
            center
          />
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  {page.pricingTable.headers.map((head) => <th key={head}>{head}</th>)}
                </tr>
              </thead>
              <tbody>
                {page.pricingTable.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, idx) => idx === 0 ? <td key={cell}><strong>{cell}</strong></td> : <td key={cell}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-caption">{page.pricingTable.caption}</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-center-wide">
          <div className="stack-list">
            {page.sections.map((section) => (
              <article className="feature-row" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((para, idx) => <p key={idx}>{para}</p>)}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container narrow-center-wide">
          <SectionHeader
            eyebrow="FAQs"
            title={`Questions about counselling fees in ${page.city.name}`}
            description={`Common questions families and professionals ask about pricing, format, and choosing the right counselling plan in ${page.city.name}.`}
            center
          />
          <FAQList items={page.faqs} />
        </div>
        <JsonLd id={`ld-faq-${page.pageSlug}`} data={faqSchema(page.faqs)} />
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Related pages"
            title={`Keep exploring guidance options in ${page.city.name}`}
            description="Use these links to compare the national pricing page, the city service page, and the most relevant next-step guidance pages."
            center
          />
          <div className="card-grid city-grid">
            {page.relatedLinks.map((link) => (
              <article className="card city-card" key={link.href}>
                <div className="card-body">
                  <h3><Link href={link.href}>{link.label}</Link></h3>
                  <Link href={link.href} className="text-link">Explore →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Need help choosing the right plan in ${page.city.name}?`}
        description={`If you are deciding between stream support, degree selection, or working-professional guidance in ${page.city.name}, speak to GCDA and we will help you pick the right plan before you book.`}
      />

      <JsonLd id={`ld-breadcrumb-${page.pageSlug}`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id={`ld-webpage-${page.pageSlug}`} data={webPageSchema({ url, name: page.title, description: page.description, primaryImage: `${SITE_URL}/assets/career-6.webp` })} />
      <JsonLd id={`ld-speakable-${page.pageSlug}`} data={speakableSchema({ url, name: page.title })} />
      <JsonLd id={`ld-itemlist-${page.pageSlug}`} data={itemListSchema({
        url,
        name: `${page.title} related links`,
        description: `Related resources for ${page.title}`,
        items: page.relatedLinks.map((link) => ({ name: link.label, url: `${SITE_URL}${link.href}`, description: link.label })),
      })} />
    </>
  );
}
