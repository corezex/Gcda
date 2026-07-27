import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Authors – GCDA',
  description: 'GCDA authors and editorial team – career counselling experts across India.',
  alternates: { canonical: '/author' },
};

export default function AuthorIndex() {
  redirect('/author/gcda-editorial-team');
}
