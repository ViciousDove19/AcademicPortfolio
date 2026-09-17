'use client'
import { motion, useReducedMotion } from 'motion/react'
import {
  ABOUT_PROFESSIONAL,
  ABOUT_READING,
  ABOUT_READING_PHOTO,
  ABOUT_GAMING,
  GAMING_FAVOURITES,
  ABOUT_GAMEDEV_INTRO,
  ABOUT_TREKKING,
  ABOUT_TREKKING_PHOTOS,
  ABOUT_ART,
  ABOUT_ART_PHOTOS,
  ABOUT_GUITAR,
  ABOUT_FOOTBALL,
  PERSONAL_GAMES,
} from '../data'
import { RuleDivider } from '@/components/notebook/rule-divider'
import { MarginNote } from '@/components/notebook/margin-note'
import { PersonalPhoto } from '@/components/notebook/personal-photo'

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

type Photo = { src: string; alt: string; caption: string }

function InterestEntry({
  label,
  children,
  photos,
}: {
  label: string
  children: React.ReactNode
  photos?: Photo[]
}) {
  return (
    <div className="space-y-1 px-1">
      <h3 className="font-serif text-base font-medium text-ink">{label}</h3>
      <p className="text-ink-soft">{children}</p>
      {photos && photos.length > 0 && (
        <div className="not-prose flex flex-wrap gap-6 pt-4 pb-2">
          {photos.map((photo, index) => (
            <PersonalPhoto
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              rotate={index % 2 === 0 ? -2 : 2}
              className="w-40 sm:w-48"
            />
          ))}
        </div>
      )}
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
        <div className="space-y-4">
          {ABOUT_PROFESSIONAL.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.section>

      <RuleDivider />

      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <h2 className="mb-5 font-serif text-lg font-medium text-ink">Personally</h2>

        <div className="flex flex-col gap-6">
          <InterestEntry label="Reading" photos={[ABOUT_READING_PHOTO]}>
            {ABOUT_READING}
          </InterestEntry>

          <InterestEntry label="Video games">
            {ABOUT_GAMING} Some of my favourites are{' '}
            {GAMING_FAVOURITES.map((title, index) => (
              <span key={title}>
                {index > 0 && (index === GAMING_FAVOURITES.length - 1 ? ', and ' : ', ')}
                <em>{title}</em>
              </span>
            ))}
            {'. '}
            {ABOUT_GAMEDEV_INTRO}
          </InterestEntry>

          <InterestEntry label="Trekking" photos={ABOUT_TREKKING_PHOTOS}>
            {ABOUT_TREKKING}
          </InterestEntry>

          <InterestEntry label="Art" photos={ABOUT_ART_PHOTOS}>
            {ABOUT_ART}
          </InterestEntry>

          <InterestEntry label="Guitar">{ABOUT_GUITAR}</InterestEntry>

          <InterestEntry label="Football">{ABOUT_FOOTBALL}</InterestEntry>
        </div>
      </motion.section>

      <RuleDivider />

      <motion.section variants={section} transition={TRANSITION_SECTION}>
        <h2 className="mb-5 font-serif text-lg font-medium text-ink">Games I&rsquo;ve made</h2>
        <div className="flex flex-col gap-3">
          {PERSONAL_GAMES.map((game, index) =>
            game.link ? (
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
            ) : (
              <div key={index} className="paper-panel block rounded-lg p-4 sm:p-5">
                <h3 className="font-serif text-base font-medium text-ink">{game.title}</h3>
                <p className="text-sm text-ink-soft">{game.description}</p>
              </div>
            ),
          )}
        </div>
        <div className="mt-3 px-1">
          <MarginNote>more to come, probably</MarginNote>
        </div>
      </motion.section>
    </motion.main>
  )
}
