import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { company } from '@/data/site';
import HtmlLang from '@/components/HtmlLang';
import { organizationSchema, websiteSchema, localBusinessSchema } from '@/data/schema';
import { hreflang } from '@/data/i18n';

const SITE_URL = 'https://gcdassociation.org';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'GCDA | Career Counselling & Career Guidance Association India',
    template: '%s | GCDA',
  },
  description:
    'GCDA – Global Career Development Association offers expert career counselling, career assessments, stream and degree selection guidance, and professional growth mentoring for students, parents, and working professionals across India.',
  applicationName: 'GCDA Career Counselling',
  authors: [
    { name: 'GCDA Editorial Team', url: 'https://gcdassociation.org/about' },
  ],
  generator: 'Next.js',
  keywords: [
    'career counselling',
    'career counselling India',
    'career guidance',
    'career assessment',
    'stream selection after 10th',
    'degree selection after 12th',
    'career counselling Mumbai',
    'career counselling Delhi',
    'career counselling Bengaluru',
    'career counselling Chennai',
    'career counselling Hyderabad',
    'career counselling Pune',
    'career counselling Kolkata',
    'career counsellor near me',
    'best career counsellor India',
    'online career counselling',
    'MBA counselling',
    'JEE planning',
    'NEET planning',
    'career after B.Tech',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'GCDA',
  publisher: 'GCDA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: hreflang('/'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: company.name,
    title: 'GCDA | Career Counselling & Career Guidance Association India',
    description:
      'Expert career counselling, career assessments, stream and degree selection, and professional growth mentoring across India.',
    images: [
      {
        url: '/assets/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'GCDA career counselling and guidance across India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCDA | Career Counselling & Career Guidance Association India',
    description:
      'Expert career counselling, career assessments, stream and degree selection, and professional growth mentoring across India.',
    images: ['/assets/hero-illustration.png'],
    creator: '@gcdaindia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  // Note: Add real Google Search Console verification token here when available
  // verification: { google: '...' },
  category: 'Education',
};

export const viewport = {
  themeColor: '#c45b40',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body>
        <HtmlLang />
        <JsonLd id="ld-organization" data={organizationSchema()} />
        <JsonLd id="ld-website" data={websiteSchema()} />
        <JsonLd id="ld-localbusiness" data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
