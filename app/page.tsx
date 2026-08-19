'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'
import {
  HERO_STATEMENT,
  BIO,
  RESEARCH,
  PUBLICATIONS,
  SERVICE,
  WORK_EXPERIENCE,
} from './data'

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

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <p className="font-[450] text-zinc-900 dark:text-zinc-50">
            {HERO_STATEMENT}
          </p>
          {BIO.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-zinc-600 dark:text-zinc-400">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Research</h3>
        <div className="flex flex-col space-y-6">
          {RESEARCH.map((project) => (
            <div key={project.id} className="space-y-1 px-1">
              <Link
                href={`/research/${project.slug}`}
                className="group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
              >
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
              </Link>
              <p className="text-sm italic text-zinc-500 dark:text-zinc-400">
                {project.subtitle}
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {project.status}
                {project.links?.map((link) => (
                  <span key={link.href}>
                    {' · '}
                    <a
                      className="underline"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Publications</h3>
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
                <h4 className="px-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {label}
                </h4>
                <ul className="space-y-2 px-1">
                  {items.map((pub) => (
                    <li
                      key={pub.id}
                      className="text-base text-zinc-600 dark:text-zinc-400"
                    >
                      {pub.link ? (
                        <a
                          className="group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.title}
                          <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                        </a>
                      ) : (
                        <span className="font-[450] text-zinc-900 dark:text-zinc-50">
                          {pub.title}
                        </span>
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
            <h4 className="px-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Service
            </h4>
            <ul className="space-y-2 px-1">
              {SERVICE.map((item) => (
                <li
                  key={item}
                  className="text-base text-zinc-600 dark:text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-3 px-1">
          <Link
            href="/experience"
            className="text-sm text-zinc-500 underline dark:text-zinc-400"
          >
            View full experience
          </Link>
        </div>
      </motion.section>
    </motion.main>
  )
}
