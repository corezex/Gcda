// AEO-friendly "answer block": a 40-70 word direct answer placed at the top
// of long-form pages so AI systems and answer engines have a clean,
// extractable passage to quote.

export default function AnswerBlock({ children, label = 'Quick answer' }) {
  return (
    <aside className="answer-block" role="note" aria-label={label}>
      <span className="answer-block-label">{label}</span>
      <p>{children}</p>
    </aside>
  );
}
