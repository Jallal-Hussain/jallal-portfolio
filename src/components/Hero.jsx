import { useEffect, useState } from 'react'
import { CONTACT_PANEL, HERO, PROFILE } from '../data/portfolio'
import SectionPattern from './SectionPattern'

const HERO_STAGGER = [
  'hero__eyebrow',
  'hero__greeting',
  'hero__headline',
  'hero__text',
  'hero__direct',
  'hero__priority',
]

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section id="home" className={`hero ${ready ? 'hero--ready' : ''}`}>
      <SectionPattern variant="hero" />
      <div className="container hero__grid">
        <div className="hero__main">
          <p className="hero__eyebrow">{HERO.eyebrow}</p>
          <p className="hero__greeting">{HERO.greeting}</p>
          <h1 className="hero__headline">{HERO.headline}</h1>
          <div className="hero__text">
            {HERO.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <a href={HERO.directLink} className="hero__direct">
            {HERO.directCta} →
          </a>
          <a href={HERO.priorityHref} className="hero__priority">
            {HERO.priorityNote}
          </a>
        </div>

        <aside className="panel hero__panel" aria-label="Contact panel">
          <div className="panel__head">
            <div className="panel__title">
              {CONTACT_PANEL.title}
              <strong>{CONTACT_PANEL.subtitle}</strong>
            </div>
            {CONTACT_PANEL.live && (
              <span className="panel__live">
                <span className="panel__live-dot" />
                Live
              </span>
            )}
          </div>
          <p className="panel__label">{CONTACT_PANEL.audiencePrompt}</p>
          <div className="panel__audience">
            {CONTACT_PANEL.audiences.map((a) => (
              <a key={a.id} href={a.href}>
                {a.label}
                <span className="link-arrow">→</span>
              </a>
            ))}
          </div>
          <div className="panel__actions">
            <a href={`mailto:${PROFILE.email}`} className="panel__btn panel__btn--primary">
              Email {PROFILE.name.split(' ')[0]}
            </a>
            <a
              href={PROFILE.resumePath}
              className="panel__btn panel__btn--ghost"
              download="Jalal_Hussain_Resume.pdf"
            >
              Download resume
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="panel__btn panel__btn--ghost"
            >
              View GitHub <span className="link-arrow">→</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
