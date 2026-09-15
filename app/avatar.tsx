export function Avatar() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 shrink-0 rounded-full"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="31" className="fill-paper-alt stroke-rule" />
      <path
        d="M14 24c2-8 8-14 18-14s16 6 18 14"
        className="stroke-ink"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="30" r="2.25" className="fill-ink" />
      <circle cx="40" cy="30" r="2.25" className="fill-ink" />
      <path
        d="M24 40c2.5 3 13.5 3 16 0"
        className="stroke-accent"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
