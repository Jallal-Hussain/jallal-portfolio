import { SERVICES } from '../data/portfolio'
import Reveal from './Reveal'
import SectionPattern from './SectionPattern'
import StaggerGroup from './StaggerGroup'

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionPattern variant="services" />
      <div className="container">
        <Reveal as="p" className="section__eyebrow" direction="up">
          {SERVICES.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section__title" delay={0.06} direction="up">
          {SERVICES.title}
        </Reveal>
        <Reveal as="p" className="section__intro" delay={0.12} direction="up">
          {SERVICES.intro}
        </Reveal>
        <StaggerGroup className="services__grid" stagger={0.1}>
          {SERVICES.items.map((item) => (
            <article key={item.title} className="service-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </StaggerGroup>
        <Reveal as="p" className="services__footnote" delay={0.2} direction="up">
          {SERVICES.footnote}
        </Reveal>
      </div>
    </section>
  )
}
