export function RadarIllustration() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="400" fill="#050808" />
      
      {/* Grid pattern */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4ade801a" strokeWidth="0.5"/>
        </pattern>
        
        <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#051008" />
          <stop offset="100%" stopColor="#020606" />
        </radialGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Radar screen base */}
      <circle cx="200" cy="200" r="180" fill="url(#radarGradient)" stroke="#4ade80" strokeWidth="2" opacity="0.8" />
      
      {/* Grid overlay */}
      <circle cx="200" cy="200" r="180" fill="url(#grid)" />
      
      {/* Range rings */}
      <circle cx="200" cy="200" r="140" fill="none" stroke="#4ade80" strokeWidth="0.8" opacity="0.5" />
      <circle cx="200" cy="200" r="100" fill="none" stroke="#4ade80" strokeWidth="0.8" opacity="0.5" />
      <circle cx="200" cy="200" r="60" fill="none" stroke="#4ade80" strokeWidth="0.8" opacity="0.5" />
      
      {/* Crosshair */}
      <line x1="200" y1="50" x2="200" y2="350" stroke="#4ade80" strokeWidth="0.6" opacity="0.3" />
      <line x1="50" y1="200" x2="350" y2="200" stroke="#4ade80" strokeWidth="0.6" opacity="0.3" />
      
      {/* Diagonal lines (azimuth markers) */}
      <line x1="200" y1="50" x2="310" y2="310" stroke="#4ade80" strokeWidth="0.4" opacity="0.2" />
      <line x1="350" y1="200" x2="50" y2="200" stroke="#4ade80" strokeWidth="0.4" opacity="0.2" />
      <line x1="200" y1="50" x2="90" y2="310" stroke="#4ade80" strokeWidth="0.4" opacity="0.2" />
      
      {/* Sweep line with glow effect */}
      <g filter="url(#glow)">
        <line x1="200" y1="200" x2="200" y2="60" stroke="#4ade80" strokeWidth="1.5" opacity="0.9" />
        <line x1="200" y1="200" x2="230" y2="70" stroke="#4ade80" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Sweep trail */}
      <line x1="200" y1="200" x2="280" y2="130" stroke="#4ade80" strokeWidth="0.8" opacity="0.3" />
      <line x1="200" y1="200" x2="310" y2="80" stroke="#4ade80" strokeWidth="0.6" opacity="0.2" />
      
      {/* Target blips */}
      {/* Blip 1 */}
      <g filter="url(#glow)">
        <circle cx="240" cy="120" r="3" fill="#4ade80" opacity="0.9" />
        <circle cx="240" cy="120" r="8" fill="none" stroke="#4ade80" strokeWidth="0.8" opacity="0.6" />
        <line x1="240" y1="200" x2="240" y2="120" stroke="#4ade80" strokeWidth="0.5" opacity="0.3" />
      </g>
      
      {/* Blip 2 */}
      <g filter="url(#glow)">
        <circle cx="170" cy="110" r="3" fill="#4ade80" opacity="0.8" />
        <circle cx="170" cy="110" r="8" fill="none" stroke="#4ade80" strokeWidth="0.8" opacity="0.5" />
      </g>
      
      {/* Blip 3 */}
      <g filter="url(#glow)">
        <circle cx="300" cy="200" r="3" fill="#4ade80" opacity="0.7" />
        <circle cx="300" cy="200" r="8" fill="none" stroke="#4ade80" strokeWidth="0.8" opacity="0.4" />
      </g>
      
      {/* Blip 4 */}
      <g filter="url(#glow)">
        <circle cx="150" cy="260" r="2.5" fill="#4ade80" opacity="0.6" />
        <circle cx="150" cy="260" r="6" fill="none" stroke="#4ade80" strokeWidth="0.8" opacity="0.3" />
      </g>
      
      {/* Center hub */}
      <circle cx="200" cy="200" r="4" fill="#4ade80" filter="url(#glow)" />
      <circle cx="200" cy="200" r="6" fill="none" stroke="#4ade80" strokeWidth="0.6" opacity="0.5" />
      
      {/* Outer bezel */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="#2a2a2a" strokeWidth="3" opacity="0.6" />
      <circle cx="200" cy="200" r="175" fill="none" stroke="#4ade80" strokeWidth="0.5" opacity="0.3" />
      
      {/* Azimuth markers */}
      <text x="200" y="40" textAnchor="middle" fill="#4ade80" fontSize="12" fontFamily="monospace" opacity="0.6">0°</text>
      <text x="350" y="205" textAnchor="start" fill="#4ade80" fontSize="12" fontFamily="monospace" opacity="0.6">90°</text>
      <text x="200" y="370" textAnchor="middle" fill="#4ade80" fontSize="12" fontFamily="monospace" opacity="0.6">180°</text>
      <text x="40" y="205" textAnchor="end" fill="#4ade80" fontSize="12" fontFamily="monospace" opacity="0.6">270°</text>
      
      {/* Scanlines effect */}
      <g opacity="0.05" strokeWidth="0.5">
        <line x1="50" y1="60" x2="350" y2="60" stroke="#4ade80" />
        <line x1="50" y1="80" x2="350" y2="80" stroke="#4ade80" />
        <line x1="50" y1="100" x2="350" y2="100" stroke="#4ade80" />
        <line x1="50" y1="120" x2="350" y2="120" stroke="#4ade80" />
        <line x1="50" y1="140" x2="350" y2="140" stroke="#4ade80" />
        <line x1="50" y1="160" x2="350" y2="160" stroke="#4ade80" />
        <line x1="50" y1="180" x2="350" y2="180" stroke="#4ade80" />
        <line x1="50" y1="200" x2="350" y2="200" stroke="#4ade80" />
        <line x1="50" y1="220" x2="350" y2="220" stroke="#4ade80" />
        <line x1="50" y1="240" x2="350" y2="240" stroke="#4ade80" />
        <line x1="50" y1="260" x2="350" y2="260" stroke="#4ade80" />
        <line x1="50" y1="280" x2="350" y2="280" stroke="#4ade80" />
        <line x1="50" y1="300" x2="350" y2="300" stroke="#4ade80" />
        <line x1="50" y1="320" x2="350" y2="320" stroke="#4ade80" />
        <line x1="50" y1="340" x2="350" y2="340" stroke="#4ade80" />
      </g>
    </svg>
  )
}
