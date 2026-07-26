import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container narrow-center">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or may have been moved.</p>
        <Link href="/" className="button button-primary">Back to Home</Link>
      </div>
    </section>
  );
}
