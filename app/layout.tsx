import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
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
    template: '%s | iversel',
    default: 'iversel - AI Automation Solutions for Business',
  },
  description: 'Transform your business with AI automation starting at $30. Deploy powerful AI agents in minutes. Enterprise-grade solutions made accessible.',
  authors: [{ name: 'iversel' }],
  metadataBase: new URL('https://iversel.netlify.app'),
  alternates: {
    canonical: 'https://iversel.netlify.app',
  },
  verification: {
    google: 'wuaEY7vRuFYdfRzLbcJZNjKBSYl_BScllRXWlBhN0ag',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iversel.netlify.app',
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SPDDM2MG17"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SPDDM2MG17');
          `}
        </Script>
      </head>
      <body className="font-sans" suppressHydrationWarning>{children}</body>
    </html>
  )
}
