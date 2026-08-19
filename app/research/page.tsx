import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { RESEARCH } from '../data'

export const metadata = {
  title: 'Research · Chinmay Raut',
  description: 'Research projects in medical imaging and agentic clinical AI.',
}

export default function ResearchIndex() {
  return (
    <section>
      <h1 className="mb-5 text-lg font-medium">Research</h1>
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
        >
          {RESEARCH.map((project) => (
            <Link
              key={project.id}
              className="-mx-3 rounded-xl px-3 py-3"
              href={`/research/${project.slug}`}
              data-id={project.id}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-normal dark:text-zinc-100">
                  {project.name}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {project.subtitle}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  {project.status}
                </p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </section>
  )
}
