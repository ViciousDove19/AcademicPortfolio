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
        '-mx-2 block rounded-xl px-3 py-2.5 text-sm transition-colors',
        isActive
          ? 'bg-zinc-100 text-zinc-950 dark:bg-zinc-900/80 dark:text-zinc-50'
          : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50',
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
      <MorphingDialogTrigger className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
        <MenuIcon className="h-5 w-5" />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-72 rounded-2xl bg-white p-2 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <nav className="flex flex-col py-1">
            {NAV_LINKS.map((link) => (
              <NavLinkRow key={link.href} label={link.label} href={link.href} />
            ))}
          </nav>
          <MorphingDialogClose className="top-3 right-3 text-zinc-500 dark:text-zinc-400" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
