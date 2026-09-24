'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from './data'

function NavLink({ label, href }: { label: string; href: string }) {
  const pathname = usePathname()
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={cn(
        'rounded-lg px-3 py-1.5 text-sm whitespace-nowrap transition-colors',
        isActive
          ? 'bg-paper-alt text-accent'
          : 'text-ink-soft hover:text-accent',
      )}
    >
      {label}
    </Link>
  )
}

export function NavMenu() {
  return (
    <nav className="flex items-center gap-1 overflow-x-auto">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.href} label={link.label} href={link.href} />
      ))}
    </nav>
  )
}
