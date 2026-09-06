import { profile, skills } from '../data/site'

function About() {
  return (
    <section className="section" id="about">
      <div className="section__header">
        <span className="section__index">01</span>
        <h2 className="section__title">About me</h2>
      </div>
      <div className="about">
        <p className="about__text">{profile.about}</p>
        <div className="about__skills">
          <h3 className="about__skills-title">Tools I work with</h3>
          <ul className="chips" aria-label="Skills">
            {skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
