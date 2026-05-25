import { PERSONAS, SKILLS } from '../data/portfolio'
import Reveal from './Reveal'
import SectionPattern from './SectionPattern'
import StaggerGroup from './StaggerGroup'

export default function Personas() {
  return (
    <>
      <section id="about" className="section">
        <SectionPattern variant="about" />
        <div className="container">
          <Reveal as="p" className="section__eyebrow" direction="up">
            {PERSONAS.eyebrow}
          </Reveal>
          <Reveal as="h2" className="section__title" delay={0.06} direction="up">
            {PERSONAS.title}
          </Reveal>
          <Reveal as="p" className="section__intro" delay={0.12} direction="up">
            {PERSONAS.intro}
          </Reveal>
          <StaggerGroup className="personas__grid" stagger={0.08}>
            {PERSONAS.items.map((p) => (
              <article key={p.title} className="persona-card">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <div className="skills-bar">
        <div className="container">
          <StaggerGroup className="skills-bar__track" stagger={0.04}>
            {SKILLS.map((s) => (
              <span key={s} className="skills-bar__chip">
                {s}
              </span>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </>
  )
}
