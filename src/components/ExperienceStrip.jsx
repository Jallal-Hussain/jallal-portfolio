import { EXPERIENCE_STRIP } from '../data/portfolio'
import Reveal from './Reveal'
import SectionPattern from './SectionPattern'
import StaggerGroup from './StaggerGroup'

export default function ExperienceStrip() {
  return (
    <section className="strip" aria-label="Experience across roles">
      <SectionPattern variant="strip" />
      <div className="container">
        <Reveal as="p" className="strip__label" direction="up">
          Developer across roles
        </Reveal>
        <StaggerGroup className="strip__track" stagger={0.08} direction="left">
          {EXPERIENCE_STRIP.map((item) => (
            <div key={`${item.role}-${item.org}`} className="strip__item">
              <div className="strip__role">{item.role}</div>
              <div className="strip__org">{item.org}</div>
              <div className="strip__period">{item.period}</div>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
