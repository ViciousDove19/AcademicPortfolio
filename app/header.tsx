'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { HERO_TITLE } from './data'
import { Avatar } from './avatar'
import { NavMenu } from './nav-menu'
import { ThemeSwitch } from '@/components/theme-switch'

export function Header() {
  return (
    <header className="mb-10 flex flex-col gap-4 border-b border-rule pb-4">
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
      <div className="flex items-center justify-between gap-3">
        <NavMenu />
        <div className="flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
