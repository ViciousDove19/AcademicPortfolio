'use client'
import { motion } from 'motion/react'
import { WORK_EXPERIENCE } from '../data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function ExperiencePage() {
  return (
    <motion.main
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h1 className="mb-5 text-lg font-medium">Work Experience</h1>
        <div className="flex flex-col space-y-8">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.id} className="space-y-2 px-1">
              <div className="flex flex-row items-baseline justify-between">
                <div>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[450] text-zinc-900 underline-offset-2 hover:underline dark:text-zinc-50"
                  >
                    {job.title}
                  </a>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {job.company}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
                  {job.start} - {job.end}
                </p>
              </div>
              <ul className="list-disc space-y-1.5 pl-5">
                {job.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-base text-zinc-600 dark:text-zinc-400"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
