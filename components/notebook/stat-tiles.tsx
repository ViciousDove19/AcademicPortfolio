type Stat = {
  label: string
  value: string
}

export function StatTiles({ stats }: { stats: Stat[] }) {
  return (
    <div className="not-prose my-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="paper-panel rounded-lg px-3 py-3 text-center"
        >
          <p className="font-mono text-lg font-medium text-accent">{s.value}</p>
          <p className="mt-1 text-xs text-ink-faint">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
