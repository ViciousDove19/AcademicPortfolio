import { cn } from '@/lib/utils'

type Bar = {
  label: string
  value: number
  highlight?: boolean
}

export function BarChart({
  title,
  data,
  caption,
  valueLabel = (v: number) => v.toFixed(2),
  max,
  highlightLabel = 'this project',
  mutedLabel = 'baseline',
}: {
  title: string
  data: Bar[]
  caption?: string
  valueLabel?: (v: number) => string
  max?: number
  highlightLabel?: string
  mutedLabel?: string
}) {
  const domainMax = max ?? Math.max(...data.map((d) => d.value)) * 1.12

  return (
    <div className="not-prose paper-panel my-6 rounded-lg p-4 sm:p-5">
      <p className="mb-3 font-serif text-sm font-medium text-ink">{title}</p>
      <div className="space-y-2">
        {data.map((d) => (
          <div
            key={d.label}
            className="flex items-center gap-2"
            title={`${d.label}: ${valueLabel(d.value)}`}
          >
            <span className="w-28 shrink-0 truncate text-xs text-ink-soft sm:w-36">
              {d.label}
            </span>
            <div className="relative h-3.5 flex-1 rounded-full bg-paper-deep">
              <div
                className={cn(
                  'h-3.5 rounded-full',
                  d.highlight ? 'bg-accent' : 'bg-ink-faint/70',
                )}
                style={{
                  width: `${Math.max(2, Math.min(100, (d.value / domainMax) * 100))}%`,
                }}
              />
            </div>
            <span className="w-14 shrink-0 text-right font-mono text-xs text-ink-soft">
              {valueLabel(d.value)}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-ink-faint">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {highlightLabel}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ink-faint/70" aria-hidden="true" />
          {mutedLabel}
        </span>
      </div>
      {caption && <p className="mt-3 text-xs text-ink-faint">{caption}</p>}
    </div>
  )
}
