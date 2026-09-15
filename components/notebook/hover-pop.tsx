import { cn } from '@/lib/utils'

// Pins a sketch/icon to the page so it visibly lifts, tilts, and gains
// a drop shadow when the *ancestor* (an element with class="group") is
// hovered or keyboard-focused — the notebook equivalent of a photo
// pinned to a corkboard being nudged. Pure CSS, so it respects the
// global prefers-reduced-motion override automatically.
export function PopIcon({
  children,
  className,
  rotate = -2,
}: {
  children: React.ReactNode
  className?: string
  rotate?: number
}) {
  return (
    <div
      className={cn(
        'relative transition-transform duration-300 ease-out',
        rotate < 0
          ? '-rotate-2 group-hover:rotate-2 group-focus-visible:rotate-2'
          : 'rotate-2 group-hover:-rotate-2 group-focus-visible:-rotate-2',
        'group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:drop-shadow-[0_16px_20px_rgba(33,29,21,0.3)]',
        'group-focus-visible:-translate-y-1.5 group-focus-visible:scale-110 group-focus-visible:drop-shadow-[0_16px_20px_rgba(33,29,21,0.3)]',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-accent/50 bg-accent/70 opacity-0 shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      {children}
    </div>
  )
}
