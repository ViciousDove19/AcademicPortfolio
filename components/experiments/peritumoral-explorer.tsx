'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/utils'

const MARKERS = [
  { x: 158, y: 62, label: 'a' },
  { x: 205, y: 88, label: 'b' },
  { x: 96, y: 118, label: 'c' },
  { x: 176, y: 158, label: 'd' },
  { x: 118, y: 168, label: 'e' },
]

export function PeritumoralExplorer({ className }: { className?: string }) {
  const [revealed, setRevealed] = useState(false)
  const maskId = useId()

  return (
    <figure
      className={cn(
        'paper-panel overflow-hidden rounded-lg',
        className,
      )}
    >
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <figcaption className="flex items-baseline justify-between gap-3">
          <span className="text-sm font-medium text-ink">
            Field note — where does the signal live?
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
            schematic, not patient data
          </span>
        </figcaption>

        <div className="relative mx-auto w-full max-w-xs">
          <svg
            viewBox="0 0 280 220"
            className="h-auto w-full rounded border border-rule bg-paper"
            role="img"
            aria-label={
              revealed
                ? 'Diagram showing the tumour with its surrounding peritumoral margin revealed, with markers indicating where predictive signal for lymph node metastasis tends to concentrate.'
                : 'Diagram showing only the tumour, with the surrounding peritumoral margin masked out, the way a lesion-cropped model would see it.'
            }
          >
            <defs>
              <pattern
                id={maskId}
                width="8"
                height="8"
                patternTransform="rotate(45)"
                patternUnits="userSpaceOnUse"
              >
                <rect width="8" height="8" className="fill-paper-deep" />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="8"
                  className="stroke-ink-faint"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            {/* tissue field */}
            <rect x="0" y="0" width="280" height="220" className="fill-paper" />

            {/* peritumoral ring — masked or revealed */}
            <circle
              cx="150"
              cy="112"
              r="70"
              className={revealed ? 'fill-accent/10 stroke-accent' : 'stroke-rule'}
              style={revealed ? undefined : { fill: `url(#${maskId})` }}
              strokeWidth="1.5"
            />

            {/* markers inside the ring, only meaningful once revealed */}
            {MARKERS.map((m) => (
              <g
                key={m.label}
                style={{
                  opacity: revealed ? 1 : 0,
                  transition: 'opacity 250ms ease',
                }}
                aria-hidden={!revealed}
              >
                <circle cx={m.x} cy={m.y} r="4" className="fill-accent" />
                <circle
                  cx={m.x}
                  cy={m.y}
                  r="8"
                  className="fill-none stroke-accent"
                  strokeWidth="0.75"
                />
              </g>
            ))}

            {/* tumour, always visible */}
            <path
              d="M150 66c16 0 28 8 34 20s6 26-2 38-22 22-36 22-30-10-36-22 4-30 10-40 14-18 30-18z"
              className="fill-ink/85 stroke-ink"
              strokeWidth="1.5"
            />
            <text
              x="150"
              y="115"
              textAnchor="middle"
              className="fill-paper font-mono"
              fontSize="9"
            >
              tumour
            </text>

            {/* ring label */}
            <text
              x="150"
              y="26"
              textAnchor="middle"
              className="fill-ink-soft font-mono"
              fontSize="9"
            >
              {revealed ? 'peritumoral margin — revealed' : 'peritumoral margin — masked'}
            </text>

            {/* measurement ticks along the ring radius */}
            <line
              x1="150"
              y1="112"
              x2="220"
              y2="112"
              className="stroke-ink-faint"
              strokeWidth="0.75"
              strokeDasharray="2 2"
            />
            <text x="182" y="108" className="fill-ink-faint font-mono" fontSize="6.5">
              margin radius
            </text>
          </svg>

          {revealed && (
            <span
              className="margin-note pointer-events-none absolute -right-1 top-6 rotate-2 text-sm sm:right-2"
              aria-hidden="true"
            >
              nodal signal
              <br />
              clusters here →
            </span>
          )}
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={revealed}
          onClick={() => setRevealed((v) => !v)}
          className="inline-flex min-h-11 items-center justify-center gap-2 self-center rounded-full border border-ink/70 bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            className="inline-block h-2 w-2 rounded-full bg-accent"
            aria-hidden="true"
          />
          {revealed ? 'Mask the margin again' : 'Reveal the peritumoral margin'}
        </button>

        <p className="text-sm leading-relaxed text-ink-soft">
          {revealed
            ? 'With the margin visible, the tissue immediately around the tumour — not the lesion itself — is where PS-MAE looks for evidence of axillary lymph node metastasis.'
            : 'This is roughly what a lesion-cropped model sees: the tumour, with the surrounding tissue discarded before it ever reaches the encoder.'}
        </p>

        <p className="border-t border-rule pt-3 text-xs leading-relaxed text-ink-faint">
          <strong className="font-medium text-ink-soft">Static explanation, no interaction needed:</strong>{' '}
          Whether a breast tumour has spread to the axillary lymph nodes is decided in part by
          the tissue that surrounds it — the peritumoral margin — not only by the lesion. Most
          imaging pipelines crop tightly to the lesion and discard that margin. PS-MAE instead
          masks the peritumoral ring during pretraining and asks the encoder to reconstruct it
          using Sobel-guided edge targets, so the model is forced to build a representation of
          the margin rather than treat it as background. Toggling the diagram above simply shows
          the difference between those two crops; the underlying claim is the same either way.
        </p>
      </div>
    </figure>
  )
}
