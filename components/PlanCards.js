import Link from 'next/link';

export default function PlanCards({ plans }) {
  return (
    <div className="card-grid plan-grid">
      {plans.map((plan) => (
        <article className={`card plan-card ${plan.badge ? 'featured' : ''}`} key={plan.slug}>
          {plan.badge ? <span className="plan-badge">{plan.badge}</span> : null}
          <div className="card-body">
            <p className="mini-label">{plan.eyebrow}</p>
            <h3>{plan.name}</h3>
            <div className="price-line">
              <strong>{plan.price}</strong>
              <span>/ {plan.note}</span>
            </div>
            <ul className="check-list">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link href="/contact" className="button button-primary block-button">
              Select Plan
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
