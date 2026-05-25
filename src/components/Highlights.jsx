import { HIGHLIGHTS } from '../data/portfolio'
import Reveal from './Reveal'
import SectionPattern from './SectionPattern'
import StaggerGroup from './StaggerGroup'

export default function Highlights() {
  return (
    <section id="highlights" className="section">
      <SectionPattern variant="highlights" />
      <div className="container">
        <Reveal as="p" className="section__eyebrow" direction="up">
          {HIGHLIGHTS.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section__title" delay={0.06} direction="up">
          {HIGHLIGHTS.title}
        </Reveal>
        <Reveal as="p" className="section__intro" delay={0.12} direction="up">
          {HIGHLIGHTS.intro}
        </Reveal>
        <StaggerGroup className="highlights__grid" stagger={0.09}>
          {HIGHLIGHTS.groups.map((g) => (
            <article key={g.title} className="highlight-card">
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
