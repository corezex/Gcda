import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import BlogCard from '@/components/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { blogPosts, blogCategories } from '@/data/blog';
import { blogListSchema, breadcrumbSchema } from '@/data/schema';
import { hreflang } from '@/data/hreflang';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  alternates: hreflang('/blog'),
  title: 'Career Guidance Blog India: Stream, Degree, MBA, JEE/NEET',
  description:
    'Practical, India-specific career guidance for students, parents, and working professionals. Read GCDA blog posts on stream selection after 10th, degree choices after 12th, JEE/NEET planning, MBA, career transitions, and working professional growth.',
  keywords: [
    'career guidance blog India',
    'career options after 12th',
    'stream selection after 10th',
    'career after B.Tech',
    'career after graduation',
    'JEE preparation',
    'NEET preparation',
    'data science career India',
    'MBA for working professionals',
  ],
  openGraph: {
    title: 'Career Guidance Blog India: Stream, Degree, MBA, JEE/NEET',
    description: 'Practical, India-specific career guidance for students, parents, and working professionals.',
    url: 'https://gcdassociation.org/blog',
    images: [
      {
        url: '/assets/service-illustration.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career guidance blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Guidance Blog India: Stream, Degree, MBA, JEE/NEET',
    description: 'Practical, India-specific career guidance from the GCDA editorial team.',
  },
};


export { default } from './_BlogContent';
