import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    // Footer
    <footer className="border-t bg-white py-12">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative h-20 w-20">
              <Image
                src="/aligned-logo.avif"
                alt="Aligned Hearts & Souls Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="text-sm text-muted-foreground mt-4 text-center md:text-left">
            Rooted in Faith, Walking in Freedom.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Welcome
            </Link>
            <Link href="/our-heart" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Our Heart
            </Link>
            <Link href="/pathways" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Pathways
            </Link>
            <Link href="/faqs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQs
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Related Services */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-foreground mb-4">Related Services</h3>
          <a
            href="https://www.collaborising.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>Collaborising.org</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <p className="text-xs text-muted-foreground mt-2 text-center md:text-left">
            Empowering collaboration and transformation
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t pt-8">
        <p className="text-sm text-muted-foreground text-center">
          © 2026 Aligned Heart & Soul. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer