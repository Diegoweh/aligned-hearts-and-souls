import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import Footer from "@/components/Footer"
import { Navbar } from "@/components/navbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://alignedheartssouls.com'),
  title: {
    default: "Aligned Heart & Soul | Christian Emotional & Spiritual Healing",
    template: "%s | Aligned Heart & Soul"
  },
  description:
    "Transform your life through faith-based heart healing, soul alignment, and prophetic coaching. A Christian platform for emotional healing and spiritual restoration rooted in biblical truth and God's presence.",
  keywords: [
    "Christian healing",
    "spiritual healing",
    "emotional healing",
    "heart healing",
    "soul alignment",
    "prophetic coaching",
    "faith-based therapy",
    "biblical counseling",
    "spiritual restoration",
    "Christian ministry",
    "deliverance ministry",
    "inner healing",
    "Christian life coaching",
    "spiritual mentorship",
    "God's healing presence"
  ],
  authors: [{ name: "Aligned Heart & Soul Ministry" }],
  creator: "Aligned Heart & Soul",
  publisher: "Aligned Heart & Soul",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alignedheartssouls.com',
    siteName: 'Aligned Heart & Soul',
    title: 'Aligned Heart & Soul | Christian Emotional & Spiritual Healing',
    description: 'Transform your life through faith-based heart healing, soul alignment, and prophetic coaching. Experience God\'s restorative power.',
    images: [
      {
        url: '/header.webp',
        width: 1200,
        height: 630,
        alt: 'Aligned Heart & Soul - Christian Healing Ministry',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aligned Heart & Soul | Christian Healing',
    description: 'Faith-based emotional and spiritual healing rooted in biblical truth.',
    images: ['/header.webp'],
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    // Agrega aquí tus códigos de verificación cuando los tengas
    // google: 'tu-código-de-verificación',
    // yandex: 'tu-código-de-verificación',
    // bing: 'tu-código-de-verificación',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aligned Heart & Soul',
    description: 'Christian ministry providing faith-based heart healing, soul alignment, and prophetic coaching for emotional and spiritual restoration.',
    url: 'https://alignedheartssouls.com',
    logo: 'https://alignedheartssouls.com/aligned-logo.avif',
    sameAs: [
      // Agrega aquí tus redes sociales cuando las tengas
      // 'https://www.facebook.com/alignedheartssouls',
      // 'https://www.instagram.com/alignedheartssouls',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English']
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Healing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Heart Healing',
            description: 'Guided spiritual processes to heal from rejection, shame, and emotional wounds'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Soul Alignment',
            description: 'Align your thoughts, emotions, and life with God\'s will and biblical principles'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prophetic Coaching',
            description: 'One-on-one spiritual mentorship led by prayer and discernment'
          }
        }
      ]
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {/* Navigation */}
      <Navbar />
        {children}

      <Footer />

      </body>
    </html>
  )
}
