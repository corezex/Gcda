import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import StatsBar from '@/components/StatsBar';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { aboutTimeline, audience, company, statsHome, valuePoints } from '@/data/site';
import { aboutPageSchema, breadcrumbSchema } from '@/data/schema';
import { hreflang } from '@/data/hreflang';


export const metadata = {
  alternates: hreflang('/about'),
  title: 'About GCDA – Career Counselling Association in India: Our Mission & Team',
  description:
    'Learn about GCDA – Global Career Development Association, our mission since 2013, our certified counsellor team, and how we guide students, parents, and working professionals through smarter career decisions across India.',
  keywords: [
    'about GCDA',
    'career counselling association India',
    'GCDA mission',
    'career counsellor team',
    'career guidance experts',
  ],
  openGraph: {
    type: 'profile',
    title: 'About GCDA – Career Counselling Association in India',
    description:
      'Learn about GCDA, our certified counsellor team, and our mission to make career guidance accessible across India.',
    url: 'https://gcdassociation.org/about',
    images: [
      {
        url: '/assets/career-8.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling team and mission',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About GCDA – Career Counselling Association in India',
    description: 'GCDA team, mission, and how we help students and professionals across India.',
  },
};


export { default } from './_AboutContent';
