'use client'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  useMorphingDialog,
} from '@/components/ui/morphing-dialog'
import { NAV_LINKS } from './data'

function NavLinkRow({ label, href }: { label: string; href: string }) {
  const pathname = usePathname()
  const { setIsOpen } = useMorphingDialog()
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className={cn(
        '-mx-2 block rounded-lg px-3 py-2.5 text-sm transition-colors',
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
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-alt hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
        <MenuIcon className="h-5 w-5" />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-72 rounded-xl border border-rule bg-paper p-2">
          <nav className="flex flex-col py-1">
            {NAV_LINKS.map((link) => (
              <NavLinkRow key={link.href} label={link.label} href={link.href} />
            ))}
          </nav>
          <MorphingDialogClose className="top-3 right-3 text-ink-soft" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
