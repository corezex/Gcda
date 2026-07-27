import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/SectionHeader';
import AnswerBlock from '@/components/AnswerBlock';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { company } from '@/data/site';
import { contactPageSchema, breadcrumbSchema } from '@/data/schema';
import { hreflang } from '@/data/hreflang';


export const metadata = {
  alternates: hreflang('/contact'),
  title: 'Contact GCDA – Career Counselling in Mumbai & Across India: Phone, Email, WhatsApp',
  description:
    'Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Visit our Mumbai office at 102, Citi Mall, Link Road, Andheri West, or reach us by phone (+91 91360 05039), email (gcda.career@gmail.com), or WhatsApp.',
  keywords: [
    'contact GCDA',
    'GCDA Mumbai office',
    'career counselling contact',
    'career counsellor phone number',
    'GCDA address',
  ],
  openGraph: {
    title: 'Contact GCDA – Career Counselling in Mumbai & Across India',
    description:
      'Contact GCDA for career counselling, career assessments, plans, and institutional workshops. Mumbai office + phone, email, WhatsApp.',
    url: 'https://gcdassociation.org/contact',
    images: [
      {
        url: '/assets/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'Contact GCDA career counselling team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact GCDA – Career Counselling in Mumbai & Across India',
    description: 'Mumbai office address, phone, email, WhatsApp, and contact form for GCDA.',
  },
};


export { default } from './_ContactContent';
