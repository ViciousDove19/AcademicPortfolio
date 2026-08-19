# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is "Nim" — a personal portfolio/website template (Next.js 15 App Router, React 19). This particular instance is Chinmay Raut's personal site (researcher at IIT Madras). Content (bio, publications, work experience, blog post list, social links) lives in `app/data.ts`, not hardcoded in components.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — run `next lint` (ESLint, flat config)
- Package manager: the repo has both `package-lock.json` and `pnpm-lock.yaml`; `pnpm` is the one actively updated (check `pnpm-lock.yaml` mtime before assuming npm).
- No test runner is configured in this repo.

## Architecture

- **Content-as-data pattern**: `app/data.ts` exports typed arrays (`PROJECTS`, `WORK_EXPERIENCE`, `BLOG_POSTS`, `SOCIAL_LINKS`) plus `EMAIL`. `app/page.tsx` (the "Personal" component) maps over these to render the homepage — sections render nothing if their array is empty. To update site content, edit `app/data.ts`, not the page components.
- **Blog posts are MDX pages**, not a content collection/CMS: each post is its own route at `app/blog/<slug>/page.mdx`. Posts can `export const metadata = {...}` for Next.js SEO/OpenGraph (see `app/blog/example-mdx-metadata/page.mdx` for the pattern). `app/blog/layout.tsx` wraps all posts with prose styling, a scroll progress bar, and a "copy URL" button. Custom MDX components (e.g. `Cover`, syntax-highlighted `code` via `sugar-high`) are defined in `mdx-components.tsx`.
- Blog post entries in `BLOG_POSTS` (`app/data.ts`) are manually kept in sync with the actual `app/blog/*/page.mdx` routes — adding a post means both creating the MDX file and adding a matching entry.
- **UI primitives** live in `components/ui/` (animated-background, magnetic, morphing-dialog, scroll-progress, spotlight, text-effect, text-loop, text-morph) — these are Motion-Primitives-style animation components built on `motion/react` (Framer Motion), used throughout `app/page.tsx`. Reuse these rather than adding new animation libraries.
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) — the standard way to compose conditional Tailwind class names.
- `lib/constants.ts` holds `WEBSITE_URL`, used by `app/robots.ts`/sitemap-related metadata.
- Global layout (`app/layout.tsx`) wires up `next-themes` (class-based dark mode, `system` default), Geist/Geist Mono fonts, Vercel Analytics, and a hardcoded Google Analytics (gtag) snippet — the GA measurement ID is inline in `app/layout.tsx`, not in an env var.
- Styling is Tailwind CSS v4 (via `@tailwindcss/postcss`, no `tailwind.config.js` — config is CSS-based in `app/globals.css`). Dark mode uses the `dark:` variant driven by the `class` attribute from `next-themes`.
- Path alias `@/*` maps to the repo root (see `tsconfig.json`).
- Prettier is configured with `prettier-plugin-tailwindcss` for class sorting (`.prettierrc.json`); ESLint extends `next/core-web-vitals`, `next/typescript`, `plugin:prettier/recommended`, and `plugin:mdx/recommended`.
