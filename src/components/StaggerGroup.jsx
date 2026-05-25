import { Children } from 'react'
import { useInView } from '../hooks/useInView'

/**
 * Staggers child animations when the group enters the viewport.
 */
export default function StaggerGroup({
  children,
  className = '',
  stagger = 0.09,
  direction = 'up',
  threshold,
  rootMargin = '0px 0px -6% 0px',
}) {
  const [ref, inView] = useInView({ threshold: threshold ?? 0.1, rootMargin })

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => {
        if (!child) return null
        return (
          <div
            key={child.key ?? i}
            className={`reveal reveal--${direction} ${inView ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: `${i * stagger}s` }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}
