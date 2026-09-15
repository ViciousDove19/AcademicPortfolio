import { cn } from '@/lib/utils'

export function RuleDivider({ className }: { className?: string }) {
  return <div className={cn('measure-rule my-8', className)} aria-hidden="true" />
}
