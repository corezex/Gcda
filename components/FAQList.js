export default function FAQList({ items }) {
  return (
    <>
      <div className="faq-list">
        {items.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .faq-list {
          display: grid;
          gap: 0.75rem;
          max-width: 880px;
          margin: 0 auto;
        }

        .faq-item {
          border-radius: var(--radius);
          border: 1px solid var(--line-2);
          background: #fff;
          box-shadow: var(--shadow-sm);
          padding: 0.95rem 1.2rem;
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }
        .faq-item[open] {
          border-color: var(--secondary-soft);
          box-shadow: var(--shadow);
        }

        .faq-item summary {
          cursor: pointer;
          list-style: none;
          font-weight: 700;
          color: var(--ink);
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.1rem 0;
        }
        .faq-item summary::-webkit-details-marker {
          display: none;
        }
        .faq-item summary::after {
          content: '+';
          font-size: 1.3rem;
          font-weight: 400;
          color: var(--secondary);
          transition: transform 0.2s ease;
          line-height: 1;
        }
        .faq-item[open] summary::after {
          content: '−';
        }

        .faq-item p {
          margin: 0.6rem 0 0;
          color: var(--muted);
          font-size: 0.96rem;
          line-height: 1.65;
        }
      ` }} />
    </>
  );
}
