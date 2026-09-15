// Small abstract, schematic diagrams in the "notebook sketch" visual language.
// All synthetic line-art — no patient imagery, no photographic content.

function SketchFrame({
  children,
  label,
}: {
  children: React.ReactNode
  label: string
}) {
  return (
    <svg
      viewBox="0 0 120 88"
      className="h-full w-full"
      role="img"
      aria-label={label}
    >
      <rect
        x="1"
        y="1"
        width="118"
        height="86"
        rx="3"
        className="fill-paper stroke-rule"
        strokeWidth="1"
      />
      {children}
    </svg>
  )
}

export function SketchPeritumoral() {
  return (
    <SketchFrame label="Schematic: a lesion at centre with a ringed margin of surrounding tissue">
      <circle
        cx="60"
        cy="44"
        r="26"
        className="fill-none stroke-ink-faint"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <path
        d="M60 20c9 0 16 4 20 10s5 14 1 21-12 13-21 13-17-6-21-13 2-15 6-21 6-10 15-10z"
        className="fill-accent/15 stroke-accent"
        strokeWidth="1.5"
      />
      <circle cx="60" cy="44" r="2" className="fill-ink" />
      <path
        d="M60 44 L84 30"
        className="stroke-ink-faint"
        strokeWidth="0.75"
      />
      <text
        x="86"
        y="29"
        className="fill-ink-soft font-mono"
        fontSize="6"
      >
        lesion
      </text>
      <path
        d="M60 44 L34 60"
        className="stroke-ink-faint"
        strokeWidth="0.75"
      />
      <text
        x="8"
        y="66"
        className="fill-ink-soft font-mono"
        fontSize="6"
      >
        margin ring
      </text>
    </SketchFrame>
  )
}

export function SketchWaveletDomain() {
  return (
    <SketchFrame label="Schematic: two population distributions aligned through wavelet frequency bands">
      <g className="stroke-ink-faint" strokeWidth="1" fill="none">
        <rect x="10" y="14" width="20" height="20" rx="2" />
        <rect x="90" y="14" width="20" height="20" rx="2" />
      </g>
      <text x="12" y="10" className="fill-ink-soft font-mono" fontSize="6">
        cohort A
      </text>
      <text x="88" y="10" className="fill-ink-soft font-mono" fontSize="6">
        cohort B
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={40 + i * 8}
          y={34 - i * 3}
          width="5"
          height={10 + i * 3}
          className={i % 2 === 0 ? 'fill-accent/70' : 'fill-ink-faint/60'}
        />
      ))}
      <text x="38" y="56" className="fill-ink-soft font-mono" fontSize="6">
        frequency bands
      </text>
      <path
        d="M32 24 H88"
        className="stroke-accent"
        strokeDasharray="2 2"
        strokeWidth="1"
        markerEnd="url(#arrow)"
      />
      <defs>
        <marker
          id="arrow"
          markerWidth="6"
          markerHeight="6"
          refX="4"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L5,3 L0,6 Z" className="fill-accent" />
        </marker>
      </defs>
      <rect
        x="10"
        y="66"
        width="100"
        height="14"
        rx="2"
        className="fill-none stroke-ink-faint"
        strokeDasharray="1 2"
      />
      <text x="14" y="75" className="fill-ink-soft font-mono" fontSize="5.5">
        adversarial alignment, wavelet domain
      </text>
    </SketchFrame>
  )
}

export function SketchAgentGraph() {
  return (
    <SketchFrame label="Schematic: histopathology, clinical, and molecular evidence converging into one reasoning node">
      {[
        { x: 16, y: 16, l: 'histopath' },
        { x: 16, y: 44, l: 'clinical' },
        { x: 16, y: 72, l: 'molecular' },
      ].map((n) => (
        <g key={n.l}>
          <circle cx={n.x} cy={n.y} r="6" className="fill-paper-alt stroke-ink-faint" />
          <path
            d={`M${n.x + 6} ${n.y} L88 44`}
            className="stroke-ink-faint"
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
          <text
            x={n.x + 10}
            y={n.y + 3}
            className="fill-ink-soft font-mono"
            fontSize="5.5"
          >
            {n.l}
          </text>
        </g>
      ))}
      <circle cx="92" cy="44" r="10" className="fill-accent/15 stroke-accent" strokeWidth="1.5" />
      <text x="79" y="63" className="fill-ink-soft font-mono" fontSize="5.5">
        risk assessment
      </text>
    </SketchFrame>
  )
}

export function SketchUltrasoundCorpus() {
  return (
    <SketchFrame label="Schematic: fan-shaped ultrasound acquisitions from multiple anatomies feeding one shared encoder">
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${18 + i * 28} 16 L${8 + i * 28} 40 A20 20 0 0 0 ${28 + i * 28} 40 Z`}
          className="fill-none stroke-ink-faint"
          strokeWidth="1"
        />
      ))}
      <text x="4" y="52" className="fill-ink-soft font-mono" fontSize="5.5">
        multi-anatomy acquisitions
      </text>
      <path
        d="M20 56 L92 56"
        className="stroke-accent"
        strokeDasharray="2 2"
        strokeWidth="1"
      />
      <rect x="82" y="46" width="24" height="24" rx="2" className="fill-accent/15 stroke-accent" strokeWidth="1.5" />
      <text x="83" y="78" className="fill-ink-soft font-mono" fontSize="5.5">
        shared encoder
      </text>
    </SketchFrame>
  )
}

export function SketchLabBench() {
  return (
    <SketchFrame label="Sketch: a microscope beside an open lab notebook">
      <g className="stroke-ink-faint" strokeWidth="1" fill="none">
        <path d="M40 66c8 4 20 4 28 0" />
        <path d="M54 30v28" />
        <rect x="46" y="18" width="16" height="12" rx="2" />
        <circle cx="54" cy="14" r="4" />
        <path d="M50 66h8l3 8H47z" className="fill-paper-alt" />
      </g>
      <g className="stroke-accent" strokeWidth="1.25" fill="none">
        <path d="M74 26h24v34H74z" />
        <path d="M78 33h16M78 40h16M78 47h10" />
      </g>
      <text x="16" y="78" className="fill-ink-soft font-mono" fontSize="6">
        research lab
      </text>
    </SketchFrame>
  )
}

export function SketchScooter() {
  return (
    <SketchFrame label="Sketch: an electric scooter with a telemetry burst">
      <g className="stroke-ink-faint" strokeWidth="1.25" fill="none">
        <circle cx="34" cy="62" r="8" />
        <circle cx="82" cy="62" r="8" />
        <path d="M34 62h20l8-24h14" />
        <path d="M54 62 62 38" />
        <path d="M62 34h10v8" />
      </g>
      <path
        d="M70 18l3 7-7 2 8 3-4 7"
        className="stroke-accent"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <text x="14" y="80" className="fill-ink-soft font-mono" fontSize="6">
        400k+ connected vehicles
      </text>
    </SketchFrame>
  )
}

export function SketchARHeadset() {
  return (
    <SketchFrame label="Sketch: an augmented-reality headset with a rendered light cone">
      <g className="stroke-ink-faint" strokeWidth="1.25" fill="none">
        <rect x="30" y="30" width="52" height="22" rx="10" />
        <circle cx="46" cy="41" r="6" />
        <circle cx="66" cy="41" r="6" />
      </g>
      <path
        d="M56 52 L56 70"
        className="stroke-ink-faint"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <path
        d="M40 70 L72 70 L62 56 L50 56 Z"
        className="fill-accent/15 stroke-accent"
        strokeWidth="1.25"
      />
      <text x="14" y="20" className="fill-ink-soft font-mono" fontSize="6">
        spherical-harmonic lighting
      </text>
    </SketchFrame>
  )
}
