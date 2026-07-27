import CTASection from '@/components/CTASection';
import FAQList from '@/components/FAQList';
import PlanCards from '@/components/PlanCards';
import SectionHeader from '@/components/SectionHeader';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { plans, siteFaqs } from '@/data/site';
import { faqSchema, productSchema, breadcrumbSchema, webPageSchema } from '@/data/schema';
import { hreflang } from '@/data/hreflang';



export const metadata = {
  alternates: hreflang('/plan'),
  title: 'Career Counselling Plans & Pricing',
  description:
    'Compare GCDA career counselling plans for stream selection after 10th, degree selection after 12th, and working professionals. Transparent pricing, structured plans.',
  keywords: [
    'career counselling plans',
    'career counselling pricing',
    'career counselling cost India',
    'stream selector plan',
    'degree selector plan',
    'working professional counselling plan',
  ],
  openGraph: {
    title: 'Career Counselling Plans & Pricing',
    description: 'Compare GCDA career counselling plans for stream selection, degree selection, and working professionals.',
    url: 'https://gcdassociation.org/plan',
    images: [
      {
        url: '/assets/career-6.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling plans and pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling Plans & Pricing',
    description: 'Compare GCDA career counselling plans for stream selection, degree selection, and working professionals.',
  },
};

export { default } from './_PlanContent';
