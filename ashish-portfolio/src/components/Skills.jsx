export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "WordPress",
    "WooCommerce",
    "Elementor",
    "Beaver Builder",
    "SEO",
    "Responsive Design",
    "Git",
    "REST API",
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-tag">Skills</div>

        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
