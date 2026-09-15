import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS } from '../data'

export const metadata = {
  title: 'Blog · Chinmay Raut',
  description: 'Writing on research, design, and engineering.',
}

export default function BlogIndex() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
        Notebook — margin writing
      </p>
      <h1 className="mt-2 mb-6 font-serif text-xl font-medium text-ink">Blog</h1>
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-paper-alt"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.uid}
              className="-mx-3 rounded-lg px-3 py-3"
              href={post.link}
              data-id={post.uid}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-serif font-medium text-ink">{post.title}</h4>
                <p className="text-sm text-ink-soft">{post.description}</p>
                <p className="font-mono text-xs text-ink-faint">{post.date}</p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </section>
  )
}
