export default function TestimonialGrid({ testimonials }) {
  return (
    <div className="card-grid testimonial-grid">
      {testimonials.map((item) => (
        <article className="card testimonial-card" key={item.name}>
          <div className="card-body">
            <div className="quote-mark">“</div>
            <p>{item.quote}</p>
            <div className="testimonial-author">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
