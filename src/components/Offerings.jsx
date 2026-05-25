import { OFFERINGS } from '../data/portfolio'
import Reveal from './Reveal'
import SectionPattern from './SectionPattern'
import StaggerGroup from './StaggerGroup'

export default function Offerings() {
  return (
    <section id="offerings" className="section">
      <SectionPattern variant="offerings" />
      <div className="container">
        <Reveal as="p" className="section__eyebrow" direction="up">
          {OFFERINGS.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section__title" delay={0.06} direction="up">
          {OFFERINGS.title}
        </Reveal>
        <Reveal as="p" className="section__intro" delay={0.12} direction="up">
          {OFFERINGS.intro}
        </Reveal>
        <StaggerGroup className="offerings__grid" stagger={0.11}>
          {OFFERINGS.items.map((item) => (
            <a key={item.title} href={item.href} className="offer-card">
              <h3>{item.title}</h3>
              <ul>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="offer-card__cta">
                <span>
                  {item.cta} <span className="link-arrow">→</span>
                </span>
                <span className="offer-card__duration">{item.duration}</span>
              </div>
            </a>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
