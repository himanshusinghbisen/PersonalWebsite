import { projects } from '../data/site'

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__header">
        <span className="section__index">02</span>
        <h2 className="section__title">Featured projects</h2>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3 className="card__title">{project.title}</h3>
            <p className="card__description">{project.description}</p>
            <ul className="chips" aria-label={`${project.title} tags`}>
              {project.tags.map((tag) => (
                <li key={tag} className="chip chip--small">
                  {tag}
                </li>
              ))}
            </ul>
            <a
              className="card__link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View project →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
