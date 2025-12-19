"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="welcome" className="relative overflow-hidden h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/es-es/download/video/7520135/" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Healing Your Heart, <span className="text-primary">Aligning Your Soul</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
            A faith-based platform dedicated to emotional and spiritual healing for believers, rooted in Christian
            values and biblical truth. Walk in your God-given purpose.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground text-lg px-8 py-6 shadow-xl"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
