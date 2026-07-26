import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'GCDA | Career Guidance & Counselling Association',
    template: '%s | GCDA',
  },
  description:
    'GCDA provides expert career counselling, personalised guidance, career assessments, workshops, and roadmap-based support for students and professionals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
