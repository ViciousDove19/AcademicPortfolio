import { cn } from '@/lib/utils'

export function MarginNote({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'margin-note -rotate-1 inline-block text-base',
        className,
      )}
    >
      {children}
    </span>
  )
}
