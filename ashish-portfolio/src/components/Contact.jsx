import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-tag">Contact</div>

        <h2 className="section-title">Let's Work Together</h2>

        <p className="contact-desc">
          I'm open to freelance projects and full-time opportunities.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:agnihotri.ashishkumar25@gmail.com"
            className="contact-btn"
          >
            <FiMail className="contact-icon" />
            Email
          </a>

          <a href="https://github.com/ashucj17" className="contact-btn">
            <FiGithub className="contact-icon" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            className="contact-btn"
          >
            <FiLinkedin className="contact-icon" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
