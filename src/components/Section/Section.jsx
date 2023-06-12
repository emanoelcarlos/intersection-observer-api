import "./Section.css";

function Section({ children, primary }) {
  return (
    <section
      className={`section ${
        primary ? "section-primary-color" : "section-secondary-color"
      }`}
    >
      {children}
    </section>
  );
}

export default Section;
