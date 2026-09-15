'use client'
import { motion, useReducedMotion } from 'motion/react'
import { WORK_EXPERIENCE } from '../data'
import { RuleDivider } from '@/components/notebook/rule-divider'
import { MarginNote } from '@/components/notebook/margin-note'

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

export default function ExperiencePage() {
  const shouldReduceMotion = useReducedMotion()
  const container = shouldReduceMotion ? { hidden: {}, visible: {} } : VARIANTS_CONTAINER
  const section = shouldReduceMotion ? { hidden: {}, visible: {} } : VARIANTS_SECTION

  return (
    <motion.main variants={container} initial="hidden" animate="visible">
      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
          Notebook — lab record
        </p>
        <h1 className="mt-2 mb-8 font-serif text-xl font-medium text-ink">
          Work Experience
        </h1>
        <div className="flex flex-col">
          {WORK_EXPERIENCE.map((job, i) => (
            <div key={job.id}>
              {i > 0 && <RuleDivider className="my-8" />}
              <div className="space-y-3 px-1">
                <div className="flex flex-row items-baseline justify-between gap-3">
                  <div>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-base font-medium text-ink underline-offset-2 hover:text-accent hover:underline"
                    >
                      {job.title}
                    </a>
                    <p className="text-sm text-ink-soft">{job.company}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-ink-faint">
                    {job.start} – {job.end}
                  </p>
                </div>
                <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
                  {job.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm leading-relaxed text-ink-soft">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 px-1">
          <MarginNote>still writing this page as I go</MarginNote>
        </div>
      </motion.section>
    </motion.main>
  )
}
