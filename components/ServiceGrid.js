import Image from 'next/image';
import Link from 'next/link';

export default function ServiceGrid({ services, limit }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <div className="card-grid service-grid">
      {list.map((service) => (
        <article className="card service-card" key={service.slug}>
          <div className="service-card-media">
            <Image
              src={service.image}
              alt={service.title}
              width={1376}
              height={768}
              sizes="(max-width: 860px) calc(100vw - 1.2rem), (max-width: 1080px) 50vw, 33vw"
            />
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
