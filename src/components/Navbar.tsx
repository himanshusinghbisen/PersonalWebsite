import { profile } from '../data/site'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#top" aria-label="Home">
        <span className="navbar__logo">{initials}</span>
        <span className="navbar__name">{profile.name}</span>
      </a>
      <nav className="navbar__nav" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} className="navbar__link" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
