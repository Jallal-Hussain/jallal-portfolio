/** Re-mounts with a smooth enter animation when `panelKey` changes */
export default function AnimatedPanel({ panelKey, children, className = '' }) {
  return (
    <div key={panelKey} className={`anim-panel ${className}`.trim()}>
      {children}
    </div>
  )
}
