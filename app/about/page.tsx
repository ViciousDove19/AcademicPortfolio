'use client'
import { motion, useReducedMotion } from 'motion/react'
import {
  ABOUT_PROFESSIONAL,
  ABOUT_PERSONAL_INTRO,
  ABOUT_FOOTBALL,
  ABOUT_READING,
  ABOUT_GAMEDEV_INTRO,
  PERSONAL_GAMES,
} from '../data'
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

function InterestEntry({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1 px-1">
      <h3 className="font-serif text-base font-medium text-ink">{label}</h3>
      <p className="text-ink-soft">{children}</p>
    </div>
  )
}

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion()
  const container = shouldReduceMotion ? { hidden: {}, visible: {} } : VARIANTS_CONTAINER
  const section = shouldReduceMotion ? { hidden: {}, visible: {} } : VARIANTS_SECTION

  return (
    <motion.main variants={container} initial="hidden" animate="visible">
      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
          Notebook — about
        </p>
        <h1 className="mt-2 mb-6 font-serif text-xl font-medium text-ink">About Me</h1>
      </motion.section>

      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <h2 className="mb-3 font-serif text-lg font-medium text-ink">Professionally</h2>
        <p className="text-ink-soft">{ABOUT_PROFESSIONAL}</p>
      </motion.section>

      <RuleDivider />

      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <h2 className="mb-3 font-serif text-lg font-medium text-ink">Personally</h2>
        <p className="mb-6 text-ink-soft">{ABOUT_PERSONAL_INTRO}</p>

        <div className="flex flex-col gap-5">
          <InterestEntry label="Football">{ABOUT_FOOTBALL}</InterestEntry>
          <InterestEntry label="Reading">{ABOUT_READING}</InterestEntry>
          <InterestEntry label="Making games">{ABOUT_GAMEDEV_INTRO}</InterestEntry>
        </div>
      </motion.section>

      <RuleDivider />

      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <h2 className="mb-5 font-serif text-lg font-medium text-ink">Games I&rsquo;ve made</h2>
        <div className="flex flex-col gap-3">
          {PERSONAL_GAMES.map((game, index) => (
            <a
              key={index}
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-panel block rounded-lg p-4 transition-colors hover:border-accent sm:p-5"
            >
              <h3 className="font-serif text-base font-medium text-ink">{game.title}</h3>
              <p className="text-sm text-ink-soft">{game.description}</p>
            </a>
          ))}
        </div>
        <div className="mt-3 px-1">
          <MarginNote>more to come, probably</MarginNote>
        </div>
      </motion.section>
    </motion.main>
  )
}
