export default function StatsBar({ stats }) {
  return (
    <>
      <div className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <p>{stat.note}</p>
          </article>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .stats-grid {
          display: grid;
          gap: 1.1rem;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .stat-card {
          padding: 1.4rem 1.4rem;
          background: #fff;
          border-radius: var(--radius);
          border: 1px solid var(--line-2);
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }
        .stat-card strong {
          display: block;
          font-size: 1.85rem;
          font-weight: 800;
          margin-bottom: 0.1rem;
          color: var(--secondary);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .stat-card span {
          display: block;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--ink);
          margin-bottom: 0.3rem;
        }
        .stat-card p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.5;
        }

        @media (max-width: 1080px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 860px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          .stat-card {
            padding: 1.1rem 1.1rem;
          }
          .stat-card strong {
            font-size: 1.5rem;
          }
        }
      ` }} />
    </>
  );
}
