import Link from 'next/link';
import { localizePath } from '@/data/i18n';

export default function BlogCard({ post, lang = 'en' }) {
  const lp = (p) => localizePath(p, lang);
  return (
    <article className="card blog-card">
      <div className="card-body">
        <span className="mini-label">{post.category}</span>
        <h3>
          <Link href={lp(`/blog/${post.slug}`)}>{post.title}</Link>
        </h3>
        <p>{post.description}</p>
        <div className="blog-meta">
          <span>{post.author || 'GCDA Editorial Team'}</span>
          <span aria-hidden="true">•</span>
          <span>{new Date(post.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          <span aria-hidden="true">•</span>
          <span>{post.readTime}</span>
        </div>
        <Link href={lp(`/blog/${post.slug}`)} className="text-link">Read full guide →</Link>
      </div>
    </article>
  );
}
