import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Users, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import Image from "next/image"
import Link from "next/link"
import { MissionBanner } from "@/components/mission-banner"
import { CurveSeparator } from "@/components/curve-separator"

export default function Home() {
  return (
    <div className="min-h-screen">
      

      {/* Hero Section */}
      <Hero />

       {/* Mission Banner */}
      {/* <MissionBanner /> */}
      

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl leading-relaxed text-foreground">
            Our mission is to help individuals heal inner wounds, align their hearts and souls with God, and walk
            confidently in their God-given purpose through His presence, truth, and restoration.
          </p>
        </div>        
      </section>

      

      {/* What We Offer */}
      <CurveSeparator color="#F6F1EC" flip={false} />
      <section id="our-heart" className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three pathways to freedom, healing, and spiritual breakthrough
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Heart Healing */}
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-balance">Heart Healing</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Guided spiritual processes designed to help people heal from rejection, shame, emotional brokenness,
                  and identity wounds.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">True healing through God's presence</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Freedom from past wounds</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Restoration of your identity in Christ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soul Alignment */}
            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-balance">Soul Alignment</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Align your thoughts, emotions, and life with God's will and biblical principles for clarity and
                  spiritual authority.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Find clarity and peace</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Walk in spiritual freedom</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Operate in spiritual authority</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prophetic Coaching */}
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-balance">Prophetic Coaching</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  One-on-one spiritual mentorship led by prayer and discernment to help you discover purpose and grow
                  spiritually.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Discover your God-given purpose</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Experience inner freedom</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm leading-relaxed">Personalized spiritual guidance</p>
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
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 shadow-xl">
              Book Your Session Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section id="pathway" className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-60 w-60 items-center justify-center rounded-full bg-primary/10">
                  <Image
                    src="/bible.avif"
                    alt="Bible Icon"
                    width={240}
                    height={240}
                    className="object-contain">
                  </Image>
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
