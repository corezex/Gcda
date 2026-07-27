import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import StatsBar from '@/components/StatsBar';
import ServiceGrid from '@/components/ServiceGrid';
import TestimonialGrid from '@/components/TestimonialGrid';
import FAQList from '@/components/FAQList';
import CTASection from '@/components/CTASection';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd from '@/components/JsonLd';
import { audience, company, journeySteps, services, siteFaqs, statsHome, testimonials, valuePoints } from '@/data/site';
import { faqSchema, howToSchema } from '@/data/schema';
import { hreflang } from '@/data/hreflang';

export const metadata = {
  alternates: hreflang('/'),
  title: 'Career Counselling & Career Guidance in India',
  description:
    'GCDA provides expert career counselling, career assessments, stream and degree selection guidance, and professional growth mentoring for students, parents, and working professionals across India.',
  keywords: [
    'career counselling India',
    'career counselling near me',
    'career assessment',
    'career guidance',
    'online career counselling',
  ],
  openGraph: {
    title: 'Career Counselling & Career Guidance in India',
    description:
      'GCDA provides expert career counselling, career assessments, stream and degree selection guidance, and professional growth mentoring across India.',
    url: 'https://gcdassociation.org/',
    images: [
      {
        url: '/assets/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling & Career Guidance in India',
    description:
      'GCDA provides expert career counselling, career assessments, stream and degree selection guidance, and professional growth mentoring across India.',
  },
};

export { default } from './_HomeContent';
