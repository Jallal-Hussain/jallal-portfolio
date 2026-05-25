/** Per-section geometric accent — sits behind section content */
export default function SectionPattern({ variant = 'default' }) {
  return <div className={`section-pattern section-pattern--${variant}`} aria-hidden="true" />
}
