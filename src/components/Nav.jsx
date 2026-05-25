import { useState } from 'react'
import { NAV_LINKS, PROFILE } from '../data/portfolio'
import { useScrolled } from '../hooks/useScrolled'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(16)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          {PROFILE.siteName}
        </a>
        <button
          type="button"
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className="nav__item"
              style={{ transitionDelay: open ? `${i * 0.05}s` : '0s' }}
            >
              <a href={link.href} className="nav__link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav__item">
            <a
              href={PROFILE.resumePath}
              className="nav__cta"
              download="Jalal_Hussain_Resume.pdf"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
