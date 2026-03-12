import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-tag">Contact</div>

      <h2 className="section-title">Let's Work Together</h2>

      <p className="contact-desc">
        I'm open to freelance projects and full-time opportunities.
      </p>

      <div className="contact-buttons">
        <a href="mailto:agnihotri.ashishkumar25@gmail.com" className="contact-btn">
          <Mail className="contact-icon" />
          Email
        </a>

        <a href="https://github.com/ashucj17" className="contact-btn">
          <Github className="contact-icon" />
          GitHub
        </a>

        <a href="https://linkedin.com/in/YOUR-LINKEDIN" className="contact-btn">
          <Linkedin className="contact-icon" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}