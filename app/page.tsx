'use client'
import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'
import { RuleDivider } from '@/components/notebook/rule-divider'
import { Stamp } from '@/components/notebook/stamp'
import { MarginNote } from '@/components/notebook/margin-note'
import {
  SketchPeritumoral,
  SketchWaveletDomain,
  SketchAgentGraph,
  SketchUltrasoundCorpus,
} from '@/components/notebook/sketches'
import { PeritumoralExplorer } from '@/components/experiments/peritumoral-explorer'
import {
  HERO_STATEMENT,
  BIO,
  RESEARCH,
  PUBLICATIONS,
  SERVICE,
  WORK_EXPERIENCE,
  EMAIL,
} from './data'

const SKETCHES: Record<string, React.ComponentType> = {
  'ps-mae': SketchPeritumoral,
  openbus: SketchUltrasoundCorpus,
  'waau-net': SketchWaveletDomain,
  chimera: SketchAgentGraph,
}

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Personal() {
  const shouldReduceMotion = useReducedMotion()
  const container = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : VARIANTS_CONTAINER
  const section = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : VARIANTS_SECTION

  return (
    <motion.main
      className="space-y-20"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Hero: the open question, in one screen */}
      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
          Notebook, entry 01
        </p>
        <h1 className="mt-3 font-serif text-2xl leading-snug text-ink sm:text-3xl">
          What can biological systems teach machines — and what can the
          representations they learn teach us back about biology?
        </h1>
        <p className="mt-4 font-[450] text-ink">{HERO_STATEMENT}</p>
        <div className="mt-4 space-y-4">
          {BIO.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="/research"
            className="inline-flex min-h-10 items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Read the research
          </Link>
          <a
            href="#experiment"
            className="inline-flex min-h-10 items-center rounded-full border border-ink/50 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Try a live demo ↓
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-10 items-center px-1 text-sm text-ink-soft underline decoration-rule underline-offset-4 hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </motion.section>

      <RuleDivider />

      {/* Interactive experiment */}
      <motion.section
        id="experiment"
        variants={section}
        transition={TRANSITION_SECTION}
        className="scroll-mt-16"
      >
        <h2 className="mb-1 font-serif text-lg font-medium text-ink">
          A minute-long demo
        </h2>
        <p className="mb-4 text-sm text-ink-soft">
          Toggle the diagram below. It is the same idea behind{' '}
          <Link href="/research/ps-mae" className="underline decoration-rule hover:text-accent">
            PS-MAE
          </Link>
          , shown schematically — no patient imagery.
        </p>
        <PeritumoralExplorer />
      </motion.section>

      <RuleDivider />

      {/* Research, as notebook records */}
      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <h2 className="mb-5 font-serif text-lg font-medium text-ink">Research</h2>
        <div className="flex flex-col gap-8">
          {RESEARCH.map((project) => {
            const Sketch = SKETCHES[project.slug]
            return (
              <article key={project.id} className="paper-panel rounded-lg p-4 sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  {Sketch && (
                    <div className="w-full shrink-0 sm:w-32">
                      <Sketch />
                    </div>
                  )}
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href={`/research/${project.slug}`}
                        className="group font-serif text-base font-medium text-ink hover:text-accent"
                      >
                        {project.name}
                      </Link>
                      <Stamp>{project.status}</Stamp>
                    </div>
                    <p className="font-serif italic text-ink-soft">
                      “{project.question}”
                    </p>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                    <div className="pt-1">
                      <Link
                        href={`/research/${project.slug}`}
                        className="text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                      >
                        Read the full entry →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </motion.section>

      <RuleDivider />

      {/* Publications */}
      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <h2 className="mb-5 font-serif text-lg font-medium text-ink">Publications</h2>
        <div className="flex flex-col space-y-6">
          {(
            [
              ['under-review', 'Under review'],
              ['in-preparation', 'In preparation'],
              ['peer-reviewed', 'Peer-reviewed'],
            ] as const
          ).map(([status, label]) => {
            const items = PUBLICATIONS.filter((pub) => pub.status === status)
            if (items.length === 0) return null
            return (
              <div key={status} className="space-y-2">
                <h3 className="px-1 font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {label}
                </h3>
                <ul className="space-y-2 px-1">
                  {items.map((pub) => (
                    <li key={pub.id} className="text-sm leading-relaxed text-ink-soft">
                      {pub.link ? (
                        <a
                          className="font-[450] text-ink underline decoration-rule underline-offset-2 hover:text-accent"
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <span className="font-[450] text-ink">{pub.title}</span>
                      )}
                      {'. '}
                      <em>{pub.venue}</em>
                      {pub.year ? `, ${pub.year}` : ''}.
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
          <div className="space-y-2">
            <h3 className="px-1 font-mono text-xs uppercase tracking-wide text-ink-faint">
              Service
            </h3>
            <ul className="space-y-2 px-1">
              {SERVICE.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <RuleDivider />

      {/* Experience preview */}
      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <h2 className="mb-5 font-serif text-lg font-medium text-ink">Work Experience</h2>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-lg bg-rule/40 p-[1px]"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight className="from-accent via-accent/60 to-transparent blur-2xl" size={64} />
              <div className="relative h-full w-full rounded-[7px] bg-paper-alt p-4">
                <div className="relative flex w-full flex-row justify-between gap-3">
                  <div>
                    <h4 className="font-medium text-ink">{job.title}</h4>
                    <p className="text-sm text-ink-soft">{job.company}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-ink-faint">
                    {job.start} – {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-3 px-1">
          <MarginNote className="text-lg">see full lab notebook →</MarginNote>{' '}
          <Link href="/experience" className="text-sm text-ink-soft underline decoration-rule">
            View full experience
          </Link>
        </div>
      </motion.section>
    </motion.main>
  )
}
