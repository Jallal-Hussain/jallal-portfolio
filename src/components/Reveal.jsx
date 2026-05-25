import { useInView } from '../hooks/useInView'

/**
 * Scroll-triggered fade/slide animation.
 * @param {object} props
 * @param {'up'|'down'|'left'|'right'|'none'} [props.direction]
 * @param {number} [props.delay] seconds
 * @param {string} [props.as] HTML tag
 */
export default function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  as: Tag = 'div',
  threshold,
  rootMargin = '0px 0px -6% 0px',
  once = true,
}) {
  const [ref, inView] = useInView({ threshold: threshold ?? 0.12, rootMargin, once })

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${direction} ${inView ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
