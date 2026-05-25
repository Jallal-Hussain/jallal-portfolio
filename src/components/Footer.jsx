import { FOOTER, PROFILE } from '../data/portfolio'
import Reveal from './Reveal'
import SectionPattern from './SectionPattern'
import StaggerGroup from './StaggerGroup'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <SectionPattern variant="footer" />
      <div className="container">
        <StaggerGroup className="footer__top" stagger={0.1} direction="up">
          <div>
            <p className="footer__brand">{PROFILE.name}</p>
            <p className="footer__tag">{FOOTER.tagline}</p>
            <p className="footer__tag" style={{ marginTop: '0.5rem' }}>
              {FOOTER.sub}
            </p>
            <a
              href={PROFILE.resumePath}
              className="footer__resume"
              download="Jalal_Hussain_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
          <div className="footer__col">
            <h4>Sitemap</h4>
            <ul className="footer__links">
              {FOOTER.sitemap.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>How to reach me</h4>
            <div className="footer__social">
              {FOOTER.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span>{s.handle}</span>
                </a>
              ))}
              <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}>
                Phone
                <span>{PROFILE.phone}</span>
              </a>
            </div>
          </div>
        </StaggerGroup>
        <Reveal as="div" className="footer__bottom" delay={0.15} direction="up">
          <span>
            © {year} {PROFILE.name}. All rights reserved.
          </span>
          <span>{PROFILE.location}</span>
        </Reveal>
      </div>
    </footer>
  )
}
