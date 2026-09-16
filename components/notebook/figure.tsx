import { cn } from '@/lib/utils'

export function Figure({
  src,
  alt,
  title,
  caption,
  background = 'white',
  className,
}: {
  src: string
  alt: string
  title?: string
  caption?: string
  background?: 'white' | 'paper'
  className?: string
}) {
  return (
    <div className={cn('not-prose paper-panel my-6 rounded-lg p-4 sm:p-5', className)}>
      {title && <p className="mb-3 font-serif text-sm font-medium text-ink">{title}</p>}
      <div
        className={cn(
          'overflow-hidden rounded-md border border-rule',
          background === 'paper' ? 'bg-paper' : 'bg-white',
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full" />
      </div>
      {caption && <p className="mt-3 text-xs text-ink-faint">{caption}</p>}
    </div>
  )
}
