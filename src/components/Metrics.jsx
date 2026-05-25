import { METRICS } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from './Reveal'
import SectionPattern from './SectionPattern'

function MetricCard({ value, suffix, label, sub }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const count = useCountUp(value, inView)

  return (
    <div ref={ref} className="metric-card">
      <div className="metric-card__num">
        {count}
        {suffix}
      </div>
      <div className="metric-card__label">{label}</div>
      <div className="metric-card__sub">{sub}</div>
    </div>
  )
}

export default function Metrics() {
  const [gridRef, gridInView] = useInView({ threshold: 0.15 })

  return (
    <section className="metrics" aria-label="Impact metrics">
      <SectionPattern variant="metrics" />
      <div className="container">
        <Reveal as="p" className="metrics__label" direction="up">
          Impact at a glance
        </Reveal>
        <div
          ref={gridRef}
          className={`metrics__grid ${gridInView ? 'metrics__grid--in' : ''}`}
        >
          {METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}
