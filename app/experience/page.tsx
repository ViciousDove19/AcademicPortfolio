'use client'
import { motion, useReducedMotion } from 'motion/react'
import { EDUCATION, POSITIONS, TECHNICAL_SKILLS, WORK_EXPERIENCE } from '../data'
import { RuleDivider } from '@/components/notebook/rule-divider'

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
        <div className="mt-2 mb-8 flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="font-serif text-xl font-medium text-ink">Curriculum Vitae</h1>
          <a
            href="/Chinmay-Raut-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-soft underline decoration-rule underline-offset-2 hover:text-accent"
          >
            Download PDF
          </a>
        </div>

        <h2 className="mb-4 font-serif text-base font-medium text-ink">Education</h2>
        <div className="flex flex-col">
          {EDUCATION.map((edu, i) => (
            <div key={edu.id}>
              {i > 0 && <RuleDivider className="my-8" />}
              <div className="space-y-3 px-1">
                <div className="flex flex-row items-baseline justify-between gap-3">
                  <div>
                    <p className="font-serif text-base font-medium text-ink">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-ink-soft">
                      {edu.degree} · {edu.location}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-ink-faint">
                    {edu.start} – {edu.end}
                  </p>
                </div>
                <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
                  {edu.details.map((detail, index) => (
                    <li key={index} className="text-sm leading-relaxed text-ink-soft">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <RuleDivider className="my-10" />

        <h2 className="mb-4 font-serif text-base font-medium text-ink">
          Work Experience
        </h2>
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

        <RuleDivider className="my-10" />

        <h2 className="mb-4 font-serif text-base font-medium text-ink">
          Positions of Responsibility &amp; Volunteer Work
        </h2>
        <div className="flex flex-col">
          {POSITIONS.map((pos, i) => (
            <div key={pos.id}>
              {i > 0 && <RuleDivider className="my-8" />}
              <div className="space-y-3 px-1">
                <div className="flex flex-row items-baseline justify-between gap-3">
                  <div>
                    {pos.link ? (
                      <a
                        href={pos.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-base font-medium text-ink underline-offset-2 hover:text-accent hover:underline"
                      >
                        {pos.title}
                      </a>
                    ) : (
                      <p className="font-serif text-base font-medium text-ink">
                        {pos.title}
                      </p>
                    )}
                    <p className="text-sm text-ink-soft">{pos.org}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-ink-faint">
                    {pos.start} – {pos.end}
                  </p>
                </div>
                <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
                  {pos.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm leading-relaxed text-ink-soft">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <RuleDivider className="my-10" />

        <h2 className="mb-4 font-serif text-base font-medium text-ink">
          Technical Skills
        </h2>
        <div className="space-y-2 px-1">
          {TECHNICAL_SKILLS.map((group) => (
            <p key={group.label} className="text-sm leading-relaxed text-ink-soft">
              <span className="font-medium text-ink">{group.label}: </span>
              {group.items.join(', ')}
            </p>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
