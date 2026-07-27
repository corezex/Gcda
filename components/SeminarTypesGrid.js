// Renders the 4 GCDA seminar types as a clean card grid.
// Used on:
//   - /career-counselling-seminar (top-level main service page)
//   - /<state>/career-counselling-seminar-<city> (city-specific pages)
//
// Each card shows the seminar's image, short title, duration tag,
// 1-line blurb, and a list of topics covered.

import Image from 'next/image';

export default function SeminarTypesGrid({ seminars, city }) {
  if (!seminars || seminars.length === 0) return null;
  const citySuffix = city ? `in ${city}` : 'across India';

  return (
    <div className="card-grid seminar-grid">
      {seminars.map((seminar) => (
        <article className="card seminar-card" key={seminar.slug} id={seminar.slug}>
          <div className="seminar-card-media">
            {seminar.heroImage ? (
              <img src={seminar.heroImage} alt={seminar.title} loading="lazy" />
            ) : (
              <div className="seminar-card-media-placeholder" aria-hidden="true">🎤</div>
            )}
            <span className="seminar-card-tag">{seminar.tag}</span>
          </div>
          <div className="card-body">
            <h3>{seminar.title}</h3>
            <p className="seminar-card-blurb">{seminar.blurb}</p>
            <div className="seminar-card-meta">
              <span className="seminar-card-format">⏱ {seminar.format}</span>
            </div>
            <div className="seminar-card-topics">
              <span className="seminar-card-topics-label">Topics covered</span>
              <ul className="bullet-list compact">
                {seminar.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
            {seminar.whoIsItFor && seminar.whoIsItFor.length > 0 ? (
              <div className="seminar-card-audience">
                <span className="seminar-card-topics-label">Ideal for {citySuffix}</span>
                <ul className="bullet-list compact">
                  {seminar.whoIsItFor.slice(0, 3).map((audience) => (
                    <li key={audience}>{audience}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
