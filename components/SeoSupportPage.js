import Image from 'next/image';
import Link from 'next/link';
import '@/styles/non-homepage.css';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { faqSchema, breadcrumbSchema, webPageSchema, speakableSchema, itemListSchema } from '@/data/schema';

const SITE_URL = 'https://gcdassociation.org';

export function buildSeoSupportMetadata(page) {
  const image = page.image || '/assets/service-illustration.webp';
  const imageAlt = page.imageAlt || page.title;

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
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
  };
}

export default function SeoSupportPage({ page }) {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: page.h1, url: `/${page.slug}` },
  ];
  const url = `${SITE_URL}/${page.slug}`;

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
              <Link href="/career-counselling" className="button button-secondary">Explore Services</Link>
            </div>
            <ul className="hero-proof" aria-label="Support page proof points">
              <li>Evidence-based guidance</li>
              <li>India-wide online access</li>
              <li>50K+ career sessions</li>
            </ul>
          </div>
          <div className="surface-card media-card">
            <Image
              src={page.image || '/assets/service-illustration.webp'}
              alt={page.imageAlt || page.title}
              width={1200}
              height={896}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1180px) 50vw, 560px"
              priority
            />
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
            eyebrow="Decision snapshot"
            title="What to know at a glance"
            description="A quick summary for students, parents, and professionals before going deeper into the decision."
            center
          />
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  {page.table.headers.map((head) => <th key={head}>{head}</th>)}
                </tr>
              </thead>
              <tbody>
                {page.table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, idx) => idx === 0 ? <td key={cell}><strong>{cell}</strong></td> : <td key={cell}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-caption">{page.table.caption}</p>
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
            title="Frequently asked questions"
            description="Common questions families and professionals ask before choosing the next step."
            center
          />
          <FAQList items={page.faqs} />
        </div>
        <JsonLd id={`ld-faq-${page.slug}`} data={faqSchema(page.faqs)} />
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Related resources"
            title="Continue with these next steps"
            description="Use these service pages, guides, and comparison pages to keep the decision process connected and practical."
            center
          />
          <div className="card-grid city-grid">
            {page.relatedLinks.map((link) => (
              <article className="card city-card" key={link.href}>
                <div className="card-body">
                  <h3><Link href={link.href}>{link.label}</Link></h3>
                  <Link href={link.href} className="text-link">Open resource →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a personalised recommendation?"
        description="If this topic applies to your situation, speak to GCDA for a more structured recommendation based on assessment, fit, and practical next steps."
      />

      <JsonLd id={`ld-breadcrumb-${page.slug}`} data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd id={`ld-webpage-${page.slug}`} data={webPageSchema({ url, name: page.title, description: page.description, primaryImage: `${SITE_URL}${page.image || '/assets/service-illustration.webp'}` })} />
      <JsonLd id={`ld-speakable-${page.slug}`} data={speakableSchema({ url, name: page.title })} />
      <JsonLd id={`ld-itemlist-${page.slug}`} data={itemListSchema({
        url,
        name: `${page.title} related resources`,
        description: `Related resources connected to ${page.title}`,
        items: page.relatedLinks.map((link) => ({ name: link.label, url: `${SITE_URL}${link.href}`, description: link.label })),
      })} />
    </>
  );
}
