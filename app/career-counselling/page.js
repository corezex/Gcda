import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import SeminarTypesGrid from '@/components/SeminarTypesGrid';
import JsonLd from '@/components/JsonLd';
import { journeySteps, services, siteFaqs } from '@/data/site';
import { SEMINAR_TYPES } from '@/data/seminars';
import { SERVICE_CITY_PATTERNS } from '@/data/servicePages';
import { STATES } from '@/data/indiaLocations';
import { faqSchema, howToSchema, serviceSchema, breadcrumbSchema } from '@/data/schema';
import { hreflang } from '@/data/hreflang';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  alternates: hreflang('/career-counselling'),
  title: 'Career Counselling Services in India',
  description:
    'GCDA offers expert career counselling in India: personal counselling, career assessments, stream and degree selection guidance, workshops, and professional mentoring for students, parents, and working professionals.',
  keywords: [
    'career counselling services India',
    'personal counselling',
    'career assessment',
    'stream selection guidance',
    'degree selection guidance',
    'working professional guidance',
    'workshops and seminars',
  ],
  openGraph: {
    title: 'Career Counselling Services in India',
    description: 'Personal counselling, career assessments, stream and degree selection, workshops, and professional mentoring across India.',
    url: 'https://gcdassociation.org/career-counselling',
    images: [
      {
        url: '/assets/service-illustration.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling services overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling Services in India',
    description: 'Personal counselling, career assessments, stream and degree selection, workshops, and professional mentoring across India.',
  },
};

export { default } from './_CareerCounsellingContent';
