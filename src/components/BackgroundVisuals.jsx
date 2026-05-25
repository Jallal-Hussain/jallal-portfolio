const NODES = [
  { x: '12%', y: '18%', delay: 0 },
  { x: '78%', y: '12%', delay: 1.2 },
  { x: '88%', y: '42%', delay: 0.6 },
  { x: '6%', y: '55%', delay: 2 },
  { x: '42%', y: '72%', delay: 1.5 },
  { x: '65%', y: '88%', delay: 0.8 },
  { x: '92%', y: '68%', delay: 2.4 },
  { x: '28%', y: '35%', delay: 1.8 },
]

export default function BackgroundVisuals() {
  return (
    <div className="bg-visuals" aria-hidden="true">
      {/* Ambient gradient mesh */}
      <div className="bg-visuals__mesh">
        <div className="bg-visuals__orb bg-visuals__orb--1" />
        <div className="bg-visuals__orb bg-visuals__orb--2" />
        <div className="bg-visuals__orb bg-visuals__orb--3" />
      </div>

      {/* Dot + line grid */}
      <div className="bg-visuals__grid" />
      <div className="bg-visuals__diagonal" />

      {/* Large geometric SVG layer */}
      <svg className="bg-visuals__svg" viewBox="0 0 1440 3200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(235,224,215,0.18)" />
            <stop offset="100%" stopColor="rgba(235,224,215,0.02)" />
          </linearGradient>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(74,222,128,0.12)" />
            <stop offset="100%" stopColor="rgba(74,222,128,0)" />
          </radialGradient>
        </defs>

        {/* Concentric rings — hero area */}
        <circle cx="1180" cy="280" r="220" fill="none" stroke="url(#strokeGrad)" strokeWidth="1" className="bg-visuals__spin-slow" />
        <circle cx="1180" cy="280" r="160" fill="none" stroke="rgba(235,224,215,0.06)" strokeWidth="1" />
        <circle cx="1180" cy="280" r="100" fill="url(#ringGlow)" stroke="rgba(235,224,215,0.08)" strokeWidth="1" />

        <circle cx="120" cy="520" r="180" fill="none" stroke="rgba(235,224,215,0.05)" strokeWidth="1" strokeDasharray="8 12" className="bg-visuals__spin-reverse" />

        {/* Hexagon cluster */}
        <g transform="translate(200 1100)" stroke="rgba(235,224,215,0.07)" strokeWidth="1" fill="none">
          <polygon points="0,-50 43.3,-25 43.3,25 0,50 -43.3,25 -43.3,-25" />
          <polygon points="0,-90 77.9,-45 77.9,45 0,90 -77.9,45 -77.9,-45" opacity="0.6" />
        </g>

        {/* Diamond lattice mid-page */}
        <g stroke="rgba(235,224,215,0.04)" strokeWidth="1">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`d1-${i}`} x1={80 + i * 120} y1="1400" x2={200 + i * 120} y2="1580" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`d2-${i}`} x1={200 + i * 120} y1="1400" x2={80 + i * 120} y2="1580" />
          ))}
        </g>

        {/* Arc bands */}
        <path
          d="M-80 2000 Q720 1850 1520 2000"
          fill="none"
          stroke="rgba(235,224,215,0.06)"
          strokeWidth="1"
        />
        <path
          d="M-80 2100 Q720 2250 1520 2100"
          fill="none"
          stroke="rgba(235,224,215,0.04)"
          strokeWidth="1"
        />

        {/* Bottom rings */}
        <circle cx="200" cy="2600" r="140" fill="none" stroke="rgba(235,224,215,0.05)" strokeWidth="1" />
        <circle cx="1240" cy="2750" r="200" fill="none" stroke="url(#strokeGrad)" strokeWidth="1" opacity="0.7" />

        {/* Connection graph */}
        <g stroke="rgba(235,224,215,0.06)" strokeWidth="1">
          <line x1="900" y1="900" x2="1100" y2="1050" />
          <line x1="1100" y1="1050" x2="1050" y2="1250" />
          <line x1="900" y1="900" x2="750" y2="1150" />
          <line x1="750" y1="1150" x2="1050" y2="1250" />
        </g>
        <g fill="rgba(235,224,215,0.25)">
          <circle cx="900" cy="900" r="4" />
          <circle cx="1100" cy="1050" r="4" />
          <circle cx="1050" cy="1250" r="4" />
          <circle cx="750" cy="1150" r="4" />
        </g>
      </svg>

      {/* Floating nodes with trails (RV data-node feel) */}
      <div className="bg-visuals__nodes">
        {NODES.map((n, i) => (
          <span
            key={i}
            className="bg-visuals__node"
            style={{
              left: n.x,
              top: n.y,
              animationDelay: `${n.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Corner frame accents */}
      <div className="bg-visuals__frame bg-visuals__frame--tl" />
      <div className="bg-visuals__frame bg-visuals__frame--br" />
    </div>
  )
}
