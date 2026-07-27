// Reusable JSON-LD component for injecting structured data on every page.
// This is the foundation for AEO (Answer Engine Optimization), GEO
// (Generative Engine Optimization), AI Overviews, and rich results.
//
// Server-rendered (not client-side) so search engines and AI crawlers see
// the schema immediately on first load, which is best practice for
// Google's AI Overviews and citation engines.

export default function JsonLd({ data, id }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
