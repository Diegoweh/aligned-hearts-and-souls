import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Users, ArrowRight, ExternalLink } from "lucide-react"
import { Hero } from "@/components/hero"
import Image from "next/image"
import Link from "next/link"
import { MissionBanner } from "@/components/mission-banner"
import { CurveSeparator } from "@/components/curve-separator"
import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Home | Faith-Based Heart Healing & Prophetic Coaching",
  description: "Begin your journey to emotional and spiritual freedom through Christian heart healing, deliverance, and prophetic coaching. Experience God's restorative power and walk in your divine purpose.",
  openGraph: {
    title: "Aligned Heart & Soul | Christian Healing Ministry",
    description: "Transform your life through faith-based heart healing and spiritual restoration.",
    url: "https://alignedheartssouls.com",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      

      {/* Hero Section */}
      <Hero />

       {/* Mission Banner */}
      {/* <MissionBanner /> */}
      

      {/* Mission Statement */}
      <section className="py-16 bg-primary text-brand-pink-foreground ">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold uppercase tracking-wide text-white/80 mb-2">
            Rooted in Faith. Aligned for Impact.
          </p>
          <p className="text-xl leading-relaxed text-white">
          Where Passionate Women Step Into Their Absolute Highest Calling. We serve two types of powerful women: those ready to restore their foundations, and those ready to activate their next level of personal and entrepreneurial authority.
          </p>
        </div>
      </section>

      

      {/* What We Offer */}
      <CurveSeparator color="#eb5942" flip={true} />
      <section id="our-heart" className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground">
            Three distinct pathways to freedom, growth, and personal breakthrough
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">            

            {/* The Process */}
            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center mx-auto">
                <Image
                  src="/heart3.avif"
                  alt="Heart"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-balance">Heart Healing</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                Inner healing and deliverance is the sacred process of identifying and removing spiritual blockages, healing deep-seated emotional wounds, and replacing destructive lies with God's truth so you can live out your divine identity in total freedom.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Healing & Deliverance: We use focused, guided prayer to actively clear spiritual blockages with authority, opening the way to fortify your heart so you can fully claim and retain God's restorative truth.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Renew Your Mind: Replace old, destructive thought patterns and lies with the absolute truth of Scripture to build a fortress around your newly healed heart.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Maintain Your Freedom: Walk daily with the Holy Spirit to guard your peace, recognizing that lasting freedom is a continual lifestyle rather than a one-time event. Put on the full armor of God each morning to stand firm against the enemy's subtle tactics, staying rooted in Word and community so the doors to your past remain permanently shut.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Heart Healing */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
              <div className="mb-6 flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center mx-auto">
                <Image
                  src="/heart3.avif"
                  alt="Heart"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>
                <h3 className="text-2xl font-bold mb-4 text-balance">Discipleship Built for Everyday Life</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                True discipleship is the intentional, lifelong process of walking with Jesus, becoming like Him, and learning to live out His teachings in everyday life. When applied to inner healing, it shifts the focus from self-help to soul-transformation through Christ.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Devotional Habits: We help you build a sustainable rhythm of Scripture reading and prayer for steady, lifelong spiritual discipline.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Everyday Righteousness: We work together to translate Biblical principles into clear, actionable choices for your personal decisions and daily lifestyle.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Relational Wisdom: We teach you how to interact with people righteously in your home, workplace, and community, relying on God's guidance to handle every relationship with wisdom.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prophetic Coaching */}
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center mx-auto">
                <Image
                  src="/heart3.avif"
                  alt="Heart"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-balance">High-Capacity Leadership & Coaching</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                You don't need a total overhaul; you need a precise blueprint. We partner with established visionaries, parents, and executives to sharpen their everyday authority, bridge transitions, and protect their peace while scaling.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Blind-Spot Protection: We act as your strategic sounding board, helping you identify hidden blind spots in your business, family dynamics, or career trajectories before they cost you time and peace.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">High-Trust Containment: We provide a secure, confidential environment where you can safely share sensitive information, voice the hard truths of leadership, and process high-stakes stress without judgment.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">True Identity Alignment: We help you untangle your personal worth from your professional performance, grounding you in the truth that you are a cherished child of God first—long before your titles and roles.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Capacity & Boundary Defense: We give you practical strategies to fiercely protect your time and energy, teaching you how to build healthy boundaries so your career never cannibalizes your personal life.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      

      {/* Call to Action */}
      
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
            Take the first step toward healing, alignment, and transformation. Book your session today and experience
            God's restorative power in your life.
          </p>
          <div className="mt-10">
            <Link href="/pathways">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 shadow-xl">
              Book Your Session Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          </div>
        </div> 
      </section>

      {/* Biblical Foundation */}
      <section id="pathway" className="py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-60 w-60 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/heart2.avif"
                  alt="Heart"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
                </div>
              </div>
              <blockquote className="text-xl sm:text-2xl font-medium text-foreground italic leading-relaxed">
                "He heals the brokenhearted and binds up their wounds."
              </blockquote>
              <p className="mt-4 text-lg text-muted-foreground">— Psalm 147:3</p>
              <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
                Our ministry is grounded in the belief that true healing comes through God's presence, truth, and
                restoration. We walk alongside you as you encounter His transformative love.
              </p>
            </CardContent>
          </Card>
        </div>        
      </section>

      <Testimonials />

      <CurveSeparator color="#eb5942" flip={false} />
      {/* Collaborising Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Logo Side */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80">
                <Image
                  src="/collaborising.webp"
                  alt="Collaborising Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Aligned Heart & Soul is a program of Collaborising 501(c)(3)
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                 A nonprofit organization committed to empowering people through spiritual alignment, financial education, and restorative support—anchored in the belief that every person deserves dignity, opportunity, and the ability to rise.
              </p>
              <div>
                <a
                  href="https://www.collaborising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl group"
                >
                  <span>Visit Collaborising.org</span>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CurveSeparator color="#eb5942" flip={true} />

      {/* FAQs Section */}
      {/* <section id="faqs" className="py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about our healing journey
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">What makes this platform different?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach is rooted in Christian values and biblical truth, offering faith-based emotional and spiritual healing that aligns with God's will for your life.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Who can benefit from these services?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Anyone seeking emotional and spiritual healing through a Christian lens. Whether you're dealing with rejection, shame, identity wounds, or seeking alignment with your God-given purpose.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">How long does the healing process take?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every journey is unique. Some experience breakthrough in one session, while others benefit from ongoing support. We walk with you at your pace, guided by prayer and the Holy Spirit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to start your healing journey? We'd love to hear from you.
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="p-8 sm:p-12">
              <div className="space-y-6 text-center">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:info@alignedheartssouls.com" className="text-primary hover:underline">
                    info@alignedheartssouls.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Schedule a Session</h3>
                  <p className="text-muted-foreground mb-4">
                    Book your first session and begin your journey toward healing and spiritual alignment.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                    Book a Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      
    </div>
  )
}
