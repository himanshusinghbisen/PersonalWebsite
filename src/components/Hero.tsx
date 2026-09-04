import { profile, socials } from '../data/site'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="hero__eyebrow">Hi, my name is</p>
        <h1 className="hero__title">{profile.name}</h1>
        <h2 className="hero__subtitle">{profile.role}</h2>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View my work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
        <ul className="hero__socials" aria-label="Social links">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}

export default Hero
