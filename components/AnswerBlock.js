// AEO-friendly "answer block": a 40-70 word direct answer placed at the top
// of long-form pages so AI systems and answer engines have a clean,
// extractable passage to quote.

export default function AnswerBlock({ children, label, lang = 'en' }) {
  const defaultLabel = lang === 'hi' ? 'त्वरित उत्तर' : 'Quick answer';
  const displayLabel = label || defaultLabel;
  return (
    <aside className="answer-block" role="note" aria-label={displayLabel}>
      <span className="answer-block-label">{displayLabel}</span>
      <p>{children}</p>
    </aside>
  );
}
