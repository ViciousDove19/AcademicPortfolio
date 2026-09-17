import { cn } from '@/lib/utils'

export function PersonalPhoto({
  src,
  alt,
  caption,
  rotate = -1,
  className,
}: {
  src: string
  alt: string
  caption: string
  rotate?: number
  className?: string
}) {
  return (
    <figure
      className={cn('not-prose inline-block', className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="overflow-hidden rounded-md border border-rule bg-white p-1.5 shadow-[0_8px_18px_rgba(22,19,13,0.18)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full rounded-sm" />
      </div>
      <figcaption className="mt-2 px-1 font-hand text-lg text-ink-faint">
        {caption}
      </figcaption>
    </figure>
  )
}
