'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export default function LayoutResearchProject({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-paper to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-accent"
        springOptions={{
          bounce: 0,
        }}
      />
      <main className="prose mt-24 pb-20 [--tw-prose-body:var(--color-ink-soft)] [--tw-prose-bold:var(--color-ink)] [--tw-prose-bullets:var(--color-rule)] [--tw-prose-captions:var(--color-ink-faint)] [--tw-prose-code:var(--color-ink)] [--tw-prose-headings:var(--color-ink)] [--tw-prose-hr:var(--color-rule)] [--tw-prose-links:var(--color-accent)] [--tw-prose-quote-borders:var(--color-accent)] [--tw-prose-quotes:var(--color-ink-soft)] prose-headings:font-serif prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:prose-base prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium prose-a:no-underline hover:prose-a:underline">
        {children}
      </main>
    </>
  )
}
