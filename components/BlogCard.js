import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <article className="card blog-card">
      <div className="card-body">
        <span className="mini-label">{post.category}</span>
        <h3>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.description}</p>
        <div className="blog-meta">
          <span>{post.author || 'GCDA Editorial Team'}</span>
          <span aria-hidden="true">•</span>
          <span>{new Date(post.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          <span aria-hidden="true">•</span>
          <span>{post.readTime}</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="text-link">Read full guide →</Link>
      </div>
    </article>
  );
}
