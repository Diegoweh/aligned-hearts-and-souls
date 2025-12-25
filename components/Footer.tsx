import React from 'react'
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    // Footer
    <footer className="border-t bg-white py-12">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
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
        {/* <span className="text-xl font-semibold hidden sm:inline-block">Aligned Hearts & Souls</span> */}
      </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2025 Aligned Hearts & Souls. Rooted in Faith, Walking in Freedom.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer