import Link from 'next/link'
import { Stamp } from '@/components/notebook/stamp'
import {
  SketchPeritumoral,
  SketchWaveletDomain,
  SketchAgentGraph,
  SketchUltrasoundCorpus,
} from '@/components/notebook/sketches'
import { RESEARCH } from '../data'

export const metadata = {
  title: 'Research · Chinmay Raut',
  description: 'Research projects in medical imaging and agentic clinical AI.',
}

const SKETCHES: Record<string, React.ComponentType> = {
  'ps-mae': SketchPeritumoral,
  openbus: SketchUltrasoundCorpus,
  'waau-net': SketchWaveletDomain,
  chimera: SketchAgentGraph,
}

export default function ResearchIndex() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
        Notebook — research
      </p>
      <h1 className="mt-2 mb-6 font-serif text-xl font-medium text-ink">
        Open questions I&rsquo;m working through
      </h1>
      <div className="flex flex-col gap-5">
        {RESEARCH.map((project) => {
          const Sketch = SKETCHES[project.slug]
          return (
            <Link
              key={project.id}
              href={`/research/${project.slug}`}
              className="paper-panel group flex flex-col gap-4 rounded-lg p-4 transition-colors hover:border-accent sm:flex-row sm:items-start sm:p-5"
            >
              {Sketch && (
                <div className="w-full shrink-0 sm:w-28">
                  <Sketch />
                </div>
              )}
              <div className="min-w-0 flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-serif text-base font-medium text-ink group-hover:text-accent">
                    {project.name}
                  </h2>
                  <Stamp>{project.status}</Stamp>
                </div>
                <p className="font-serif italic text-sm text-ink-soft">
                  “{project.question}”
                </p>
                <p className="text-sm text-ink-faint">{project.subtitle}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
