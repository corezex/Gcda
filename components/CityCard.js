// A compact city card used on the /cities hub and city-related cross-links.
import Link from 'next/link';

export default function CityCard({ city, tierLabel }) {
  return (
    <article className="card city-card">
      <div className="card-body">
        {tierLabel ? <span className="mini-label">{tierLabel}</span> : null}
        <h3>
          <Link href={`/cities/${city.slug}`}>{city.name}</Link>
        </h3>
        <p className="city-state">{city.state} • {city.region}</p>
        <p className="city-blurb">{city.tagline}</p>
        <Link href={`/cities/${city.slug}`} className="text-link">
          Explore career counselling in {city.name} →
        </Link>
      </div>
    </article>
  );
}
