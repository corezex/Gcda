import Link from 'next/link';
import JsonLd from './JsonLd';
import { breadcrumbSchema } from '@/data/schema';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={`${item.name}-${idx}`}>
                {isLast || !item.url ? (
                  <span aria-current={isLast ? 'page' : undefined}>{item.name}</span>
                ) : (
                  <Link href={item.url}>{item.name}</Link>
                )}
                {!isLast ? <span className="breadcrumb-sep" aria-hidden="true">/</span> : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd id={`breadcrumb-${items[items.length - 1].name.toLowerCase().replace(/\s+/g, '-')}`} data={breadcrumbSchema(items)} />
    </>
  );
}
