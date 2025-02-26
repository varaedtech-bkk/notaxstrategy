
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "The best tax planning service I've ever used.",
      author: "John Doe",
      position: "Business Owner"
    },
    {
      text: "Saved us thousands on our business taxes.",
      author: "Jane Smith",
      position: "CEO"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p>{testimonial.text}</p>
            <div className={styles.author}>
              <strong>{testimonial.author}</strong>
              <span>{testimonial.position}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
