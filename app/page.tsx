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
  title: "Home | Faith-Based Heart Healing & Soul Alignment",
  description: "Begin your journey to emotional and spiritual freedom through Christian heart healing, soul alignment, and prophetic coaching. Experience God's restorative power and walk in your divine purpose.",
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
          <p className="text-xl leading-relaxed text-white">
            Our mission is to help individuals heal inner wounds, align their hearts and souls with God, and walk
            confidently in their God-given purpose through His presence, truth, and restoration.
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
              Three pathways to freedom, healing, and spiritual breakthrough
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
                <h3 className="text-2xl font-bold mb-4 text-balance">The Process</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                Experience a structured progression toward freedom and purpose. True breakthrough requires clearing the ground through deliverance first, followed by deep inner healing to rebuild and secure your identity in Christ
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">First Deliverance, Then Healing: Clear spiritual blockages first so your heart can fully receive and retain God's deep, restorative healing.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Renew the Mind: Replace old, destructive thought patterns and lies with the absolute truth of Scripture to build a fortress around your newly healed heart.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Maintain Your Freedom: Walk daily with the Holy Spirit to guard your peace, recognizing that lasting freedom is a continual lifestyle rather than a one-time event. Put on the full armor of God each morning to stand firm against the enemy's subtle tactics, staying rooted in Word and community so the doors to your past remain permanently shut</p>
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
                <h3 className="text-2xl font-bold mb-4 text-balance">Heart Healing</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                Guided spiritual prayer designed to help you heal from rejection, shame, emotional brokenness, and identity wounds
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Silence the Noise to Encounter God: Quiet your mind through Spirit-led prayer to experience deep peace and intimacy with the Father
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Release Past Wounds through Forgiveness: Find freedom from trauma and old hurts by extending grace to yourself and others
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Reclaim Your True Identity in Christ: Trade the weight of shame and rejection for the uplifting truth of who God says you are</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Partner with a Prophetic Coach: Secure your breakthrough through ongoing prophetic coaching, giving you the strategic accountability needed to stay free and walk out your purpose.</p>
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
                <h3 className="text-2xl font-bold mb-4 text-balance">Prophetic Coaching</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                Secure your breakthrough and sustain your healing through one-on-one mentorship that bridges divine revelation with practical, daily life coaching
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Sustain Your Healing: Partner with a strategic guide to guard your freedom, prevent old patterns from returning, and actively maintain the spiritual ground you have gained</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Strategic Decision-Making: Gain absolute clarity on your career, family, and ministry choices through focused, Spirit-led prophetic insight</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Compassionate Accountability: Walk in a safe, non-judgmental relationship that keeps you grounded, fiercely focused, and continually growing in your spiritual walk</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Internal Alignment: Harmonize your soul, spirit, and everyday actions to live with authentic, God-given authority. Working together, we will bridge the gap between your spiritual breakthrough and your physical reality</p>
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
