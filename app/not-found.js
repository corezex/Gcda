import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import AnswerBlock from '@/components/AnswerBlock';
import CTASection from '@/components/CTASection';
import { breadcrumbSchema } from '@/data/schema';
import { hreflang } from '@/data/hreflang';

const SITE_URL = 'https://gcdassociation.org';

const notFoundBreadcrumbs = [
  { name: 'Home', url: '/' },
  { name: '404', url: '/404' },
];

export const metadata = {
  alternates: hreflang('/404'),
  title: 'Page Not Found (404)',
  description: 'The page you are looking for could not be found. Explore GCDA career counselling, career assessments, and our 346+ city pages.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-center">
          <span className="eyebrow">404</span>
          <h1>Page not found</h1>
          <p className="page-hero-copy">
            The page you are looking for does not exist or may have been moved. Use the links below to find what you need.
          </p>
          <div className="button-row">
            <Link href="/" className="button button-primary">Back to Home</Link>
            <Link href="/career-counselling" className="button button-secondary">Explore Services</Link>
            <Link href="/cities" className="button button-secondary">Find a City</Link>
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container narrow-center">
          <AnswerBlock>
            The page you are looking for could not be found. GCDA offers career counselling, career assessments, stream and degree selection guidance, and professional mentoring across 346+ cities in India. Browse our services or contact us if you need help finding what you need.
          </AnswerBlock>
        </div>
      </section>

      <CTASection
        title="Need help? Talk to a GCDA counsellor"
        description="Speak to a GCDA counsellor for personalised career guidance. We are available online across India and in-person in 346+ cities."
        primaryLabel="Contact GCDA"
        secondaryLabel="Call +91 91360 05039"
      />

      <JsonLd id="ld-breadcrumb-404" data={breadcrumbSchema(notFoundBreadcrumbs)} />
    </>
  );
}
