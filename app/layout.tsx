import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playpen_Sans, Caveat } from 'next/font/google'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { Analytics } from "@vercel/analytics/next"


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5efe1' },
    { media: '(prefers-color-scheme: dark)', color: '#18150f' },
  ],
}

export const metadata: Metadata = {
  title: 'Chinmay Raut — Research notebook',
  description:  'Chinmay Raut - Researcher at IIT Madras. Exploring the intersection of AI and Biology.',
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const handDisplay = Playpen_Sans({
  variable: '--font-hand-display',
  subsets: ['latin'],
})

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${handDisplay.variable} ${caveat.variable}`}
    >
    {/* Google Analytics 4 */}
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-DDZ0V974RD`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DDZ0V974RD');
      `}
    </Script>
      <body className="bg-paper font-serif text-[17px] tracking-tight text-ink antialiased selection:bg-accent/20">
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-2xl flex-1 border-x border-rule/70 px-5 pt-10 sm:px-8 sm:pt-14">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
