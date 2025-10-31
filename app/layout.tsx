import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | iversel - AI Automation',
    default: 'iversel - AI Automation Solutions',
  },
  description: 'Discover powerful AI agents and automation solutions starting from just $30. Accessible AI for everyone.',
  authors: [{ name: 'iversel' }],
  metadataBase: new URL('https://iversel.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iversel.com',
    siteName: 'iversel',
    title: 'iversel - AI Automation Solutions',
    description: 'Discover powerful AI agents and automation solutions starting from just $30.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iversel - AI Automation Solutions',
    description: 'Discover powerful AI agents and automation solutions starting from just $30.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>{children}</body>
    </html>
  )
}
