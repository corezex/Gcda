export default function SectionHeader({ eyebrow, title, description, center = false }) {
  return (
    <div className={`section-header ${center ? 'center' : ''}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
