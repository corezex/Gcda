import Link from 'next/link';
import { localizePath } from '@/data/i18n';

export default function ServiceGrid({ services, limit, lang = 'en' }) {
  const list = limit ? services.slice(0, limit) : services;
  const lp = (p) => localizePath(p, lang);

  return (
    <div className="card-grid service-grid">
      {list.map((service) => (
        <article className="card service-card" key={service.slug}>
          <div className="service-card-media">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="card-body">
            <div className="icon-badge">{service.icon}</div>
            <h3>
              <Link href={lp(`/career-counselling/${service.slug}`)}>{service.title}</Link>
            </h3>
            <p>{service.shortDescription}</p>
            <Link href={lp(`/career-counselling/${service.slug}`)} className="text-link">
              Explore service →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
