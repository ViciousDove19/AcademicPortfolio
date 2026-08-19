export function Avatar() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 shrink-0 rounded-full"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="31" className="fill-zinc-100 dark:fill-zinc-800" />
      <path
        d="M14 24c2-8 8-14 18-14s16 6 18 14"
        className="stroke-zinc-900 dark:stroke-zinc-50"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="30" r="2.25" className="fill-zinc-900 dark:fill-zinc-50" />
      <circle cx="40" cy="30" r="2.25" className="fill-zinc-900 dark:fill-zinc-50" />
      <path
        d="M24 40c2.5 3 13.5 3 16 0"
        className="stroke-zinc-900 dark:stroke-zinc-50"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
