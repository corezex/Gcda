import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd from '@/components/JsonLd';
import { STATES } from '@/data/indiaLocations';
import { company } from '@/data/site';
import { citiesCollectionSchema, breadcrumbSchema } from '@/data/schema';
import { hreflang } from '@/data/hreflang';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  alternates: hreflang('/cities'),
  title: 'Career Counselling Across India: 36 States, 346+ Cities',
  description:
    'GCDA offers career counselling, career assessments, stream and degree selection guidance, and professional mentoring across 36 Indian states and union territories, covering 346+ cities including metros like Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Pune, and Kolkata.',
  keywords: [
    'career counselling cities India',
    'career counsellor near me',
    'career counselling Mumbai',
    'career counselling Delhi',
    'career counselling Bengaluru',
    'career counselling all states',
  ],
  openGraph: {
    title: 'Career Counselling Across India: 36 States, 346+ Cities',
    description:
      'GCDA career counselling, career assessments, and professional mentoring across 36 Indian states and 346+ cities.',
    url: 'https://gcdassociation.org/cities',
    images: [
      {
        url: '/assets/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling coverage across India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling Across India: 36 States, 346+ Cities',
    description: 'GCDA career counselling across 36 states and 346+ cities in India.',
  },
};


export { default } from './_CitiesContent';
