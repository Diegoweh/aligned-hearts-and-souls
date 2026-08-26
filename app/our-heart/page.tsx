import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CurveSeparator } from '@/components/curve-separator'

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Meet Your Coach Section */}
      <section className="py-20 bg-brand-pink text-brand-pink-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Meet Your Coach</h2>
            <p className="mt-4 text-lg text-brand-pink-foreground">
              Experience transformation through prophetic soul alignment
            </p>
          </div>

          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0 md:items-stretch">
                {/* Image Section */}
                <div className="relative h-[400px] md:h-auto md:min-h-full bg-gradient-to-br from-primary/10 to-secondary/10">
                  <Image
                    src="/our-heart/lea-coach-2.webp"
                    alt="Lea Murray - Prophetic Soul Alignment Coach"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top rounded-2xl"
                    priority
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-12 flex flex-col justify-center bg-gradient-to-br from-background to-muted/50">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Lea Murray Quintana, MPH, MA</h3>
                  <p className="text-lg text-primary font-medium mb-6">Prophetic Alignment Coach</p>

                  <div className="space-y-4 font-medium text-foreground leading-relaxed">
                    <p className="font-medium text-foreground">
                    Lea Murray Quintana is a gifted prophetic coach, spiritual strategist, and dual-Master's professional holding advanced degrees in Public Health Nutrition and African Diaspora Studies. Dedicated to helping women unlock their highest Kingdom calling, her coaching bridges the gap between divine alignment, holistic wellness, and practical execution. She creates a secure, confidential space for sudden breakthroughs, helping you quiet the internal noise, reclaim your identity in Christ, and cultivate an unshakeable ground of peace.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
        </div>        
      </section>
      <CurveSeparator color="#F07D86" flip={true} />

      

      {/* Our Heart - Mission Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Our Heart</h2>
            <p className="mt-4 text-lg text-muted-foreground">
            Holy Spirit-led deliverance, heart healing, and high-capacity coaching.
            </p>
          </div>

          {/* Intention Card */}
          <Card className="border-2 border-primary/20 mb-8 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-[300px] md:h-auto min-h-[300px] bg-gradient-to-br from-primary/20 to-primary/5">
                  <Image
                    src="/our-heart/our-heart-1.avif"
                    alt="Our Intention"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Intention</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                  Our intention is to empower believers to dismantle the strongholds of rejection and reclaim their original design through the restorative power of deliverance and inner healing.
                  </p>
                  {/* <p className="mt-6 text-foreground font-medium leading-relaxed">
                  At Aligned Heart & Soul, we facilitate the sacred process of mending soul wounds to transition you from spiritual survival into true kingdom authority. We believe that as your heart aligns with God’s truth, you are liberated to stop striving and begin walking in the fullness of your identity in Christ.
                  </p> */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Inspiration Card */}
          <Card className="border-2 border-secondary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 p-8 sm:p-12 flex flex-col justify-center order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                      <Sparkles className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Inspiration</h3>
                  </div>
                  {/* <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  At Aligned Heart & Soul, we help believers dismantle the strongholds of rejection and reclaim their original design. Through deliverance and inner healing, we transition you from weariness and spiritual survival into true Kingdom authority.
                  </p> */}
                  <p className="text-lg leading-relaxed text-muted-foreground">
                  Whether you are scaling your professional impact or seeking deep emotional restoration, our process aligns your heart with God's truth. We partner with you to stop the exhausting cycle of striving, protect your peace, and walk in the absolute fullness of your identity in Christ.
                  </p>
                </div>
                <div className="md:col-span-2 relative h-[300px] md:h-auto min-h-[300px] bg-gradient-to-br from-secondary/20 to-secondary/5 order-1 md:order-2">
                  <Image
                    src="/our-heart/our-heart-2.avif"
                    alt="Our Inspiration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
            Experience the transformative power of Spirit-led healing and prophetic coaching.
            Take the first step toward wholeness and alignment with your true identity in Christ.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pathways">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 shadow-xl">
              Book Your Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
            {/* <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 shadow-xl"
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default page
