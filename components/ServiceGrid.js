import Link from 'next/link';

export default function ServiceGrid({ services, limit }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <div className="card-grid service-grid">
      {list.map((service) => (
        <article className="card service-card" key={service.slug}>
          <div className="service-card-media">
            <img src={service.image} alt={service.title} width="1376" height="768" loading="lazy" decoding="async" />
          </div>
          <div className="card-body">
            <div className="icon-badge">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.shortDescription}</p>
            <Link href={`/career-counselling/${service.slug}`} className="text-link">
              Explore service →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
