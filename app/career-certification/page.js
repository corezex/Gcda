import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SectionHeader from '@/components/SectionHeader';
import FAQList from '@/components/FAQList';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { company } from '@/data/site';
import { faqSchema, breadcrumbSchema, courseSchema } from '@/data/schema';
import { hreflang } from '@/data/hreflang';



export const metadata = {
  alternates: hreflang('/career-certification'),
  title: 'Career Counselling Certification in India',
  description:
    'Become a certified career counsellor with GCDA. Our comprehensive offline + online certification programme equips you with the skills, assessments, and mentoring techniques to guide students and working professionals across India.',
  keywords: [
    'career counselling certification',
    'career counsellor course',
    'career counselling course',
    'certified career counsellor',
    'career counselling training India',
    'career counsellor certification online',
  ],
  openGraph: {
    title: 'Career Counselling Certification in India',
    description:
      'Become a certified career counsellor with GCDA. Comprehensive certification programme for aspiring and practising counsellors.',
    url: 'https://gcdassociation.org/career-certification',
    type: 'article',
    images: [
      {
        url: '/assets/career-7.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling certification programme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling Certification in India',
    description: 'Become a certified career counsellor with GCDA. Comprehensive certification programme for aspiring and practising counsellors.',
  },
};



export { default } from './_CareerCertificationContent';
