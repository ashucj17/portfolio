import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-tag">Work</div>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    className="project-link"
                  >
                    Github
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="project-link"
                  >
                    Live
                  </a>
                </div>
              </div>

              <div className="project-name">{project.name}</div>

              <div className="project-desc">{project.desc}</div>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
