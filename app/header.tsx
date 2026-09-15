'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { HERO_TITLE } from './data'
import { Avatar } from './avatar'
import { NavMenu } from './nav-menu'

export function Header() {
  return (
    <header className="mb-10 flex items-center justify-between border-b border-rule pb-4">
      <div className="flex items-center gap-3">
        <Avatar />
        <div>
          <Link
            href="/"
            className="font-serif text-lg font-semibold text-ink hover:text-accent"
          >
            Chinmay Raut
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-sm text-ink-faint"
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
