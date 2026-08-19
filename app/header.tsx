'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { HERO_TITLE } from './data'
import { Avatar } from './avatar'
import { NavMenu } from './nav-menu'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Chinmay Raut
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            {HERO_TITLE}
          </TextEffect>
        </div>
      </div>
      <NavMenu />
    </header>
  )
}
