export default function StatsBar({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
          <p>{stat.note}</p>
        </article>
      ))}
    </div>
  );
}
