import { useState } from 'react'
import { CERTIFICATIONS, EXPERIENCE, PROJECTS, WORK } from '../data/portfolio'
import AnimatedPanel from './AnimatedPanel'
import Reveal from './Reveal'
import SectionPattern from './SectionPattern'
import StaggerGroup from './StaggerGroup'

function ProjectCards() {
  return (
    <StaggerGroup className="work__cards" stagger={0.09}>
      {PROJECTS.map((p) => (
        <article key={p.id} className="work-card">
          <a
            href={p.live || p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card__img-wrap"
          >
            <img
              src={p.image}
              alt={p.imageAlt}
              className="work-card__img"
              loading="lazy"
            />
          </a>
          <div className="work-card__body">
            <p className="work-card__cat">{p.category}</p>
            <h3 className="work-card__title">{p.title}</h3>
            <p className="work-card__desc">{p.description}</p>
            <div className="work-card__tags">
              {p.tags.map((t) => (
                <span key={t} className="work-card__tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="work-card__links">
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                GitHub <span className="link-arrow">→</span>
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  Live demo <span className="link-arrow">→</span>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </StaggerGroup>
  )
}

function ExperienceList() {
  return (
    <StaggerGroup className="exp-list" stagger={0.1}>
      {EXPERIENCE.map((exp) => (
        <article key={exp.id} className="exp-item">
          <div className="exp-item__head">
            <span className="exp-item__role">
              {exp.role}, {exp.company}
            </span>
            <span className="exp-item__meta">{exp.period}</span>
          </div>
          <p className="exp-item__type">{exp.type}</p>
          <ul>
            {exp.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </StaggerGroup>
  )
}

function CertList() {
  return (
    <StaggerGroup className="cert-grid" stagger={0.08}>
      {CERTIFICATIONS.map((c) => (
        <div key={c.name} className="cert-item">
          <p className="cert-item__name">{c.name}</p>
          <p className="cert-item__meta">
            {c.issuer} · {c.date}
          </p>
        </div>
      ))}
    </StaggerGroup>
  )
}

export default function WorkSection() {
  const [tab, setTab] = useState('projects')

  return (
    <section id="work" className="section">
      <SectionPattern variant="work" />
      <div className="container">
        <Reveal as="p" className="section__eyebrow" direction="up">
          {WORK.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section__title" delay={0.06} direction="up">
          {WORK.title}
        </Reveal>

        <Reveal className="work__tabs-wrap" delay={0.12} direction="up">
          <div className="work__tabs" role="tablist">
            {WORK.tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                className={`work__tab ${tab === t.id ? 'work__tab--active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatedPanel panelKey={tab}>
          <p className="work__tab-intro">{WORK.tabIntro[tab]}</p>
          {tab === 'projects' && <ProjectCards />}
          {tab === 'experience' && <ExperienceList />}
          {tab === 'certs' && <CertList />}
        </AnimatedPanel>
      </div>
    </section>
  )
}
