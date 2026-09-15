import { cn } from '@/lib/utils'

export function Stamp({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex -rotate-1 items-center rounded-sm border border-accent/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent',
        className,
      )}
    >
      {children}
    </span>
  )
}
