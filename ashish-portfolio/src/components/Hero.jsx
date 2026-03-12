export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>

      <div className="hero-content">

        <div className="hero-badge">
          Available for work · Pune, India
        </div>

        <h1>
          WordPress & <br/> <span className="line2">Web Developer</span>
        </h1>

        <p className="hero-desc">
          I'm <strong>Ashish Kumar</strong> — a self-driven web developer
          with <strong>6+ years</strong> building responsive, performant
          WordPress websites and front-end experiences.
        </p>

        <div className="hero-actions">
          <a href="#experience" className="btn-primary">
            View Experience ↓
          </a>

          <a href="mailto:agnihotri.ashishkumar25@gmail.com"
             className="btn-secondary">
            Get in touch
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-num">6+</div>
            <div className="stat-label">Years of Experience</div>
          </div>

          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">Companies Worked</div>
          </div>

          <div>
            <div className="stat-num">MCA</div>
            <div className="stat-label">Data Science Graduate</div>
          </div>
        </div>

      </div>
    </section>
  )
}