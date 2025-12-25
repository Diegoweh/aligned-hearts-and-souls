import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Heart, Users, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CurveSeparator } from '@/components/curve-separator'

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your Journey to Freedom
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground">
            At Aligned Heart & Soul, we offer Spirit-led pathways for inner healing, soul alignment, and freedom
            from rejection and soul wounds. Each journey combines prayer, prophetic guidance, and practical steps —
            so you can heal deeply, live boldly, and walk in your God-given purpose.
          </p>
        </div>
      </section>
      <CurveSeparator color="#F6F1EC" flip={true} />

      {/* Pathways Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* RESTORATION PATH - Individual */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-2xl flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Restoration Path</h2>
                  <p className="text-xl text-primary font-medium">Individual Journey to Freedom</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  Personalized, Spirit-led sessions with your prophetic coach that partner with the Holy Spirit for
                  inner healing, prayer, and alignment. Each session is designed to help you break free from
                  rejection, renounce lies, and realign your soul with God's truth.
                </p>

                {/* What to Expect */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    What to Expect:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">6 session Starter Pack</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        60 minutes of individualized prophetic coaching, prayer, and inner healing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Identify and uproot common lies that deplete your soul
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Break strongholds and cycles that block your freedom
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Speak God's truth and promises over your life
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Learn to bless yourself and walk in daily alignment
                      </span>
                    </li>
                  </ul>
                </div>

                {/* What you Receive */}
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4">What You Receive:</h3>
                  <div className="space-y-3 bg-primary/5 p-4 rounded-lg">
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">
                        <strong>Clarity</strong> to see the root of struggles and the path forward to healing
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">
                        <strong>Confidence</strong> to walk boldly in your true identity, free from fear and doubt
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">
                        <strong>Peace</strong> to restore your mind, body, soul, and spirit
                      </span>
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  >
                    <Link href="https://buy.stripe.com/14A6oIeui5zv9pFcLs0Fi09" target="_blank">
                      Unlock Your 1:1 Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ALIGNMENT PATH - Group */}
            <Card className="border-2 border-secondary/30 hover:border-secondary transition-all duration-300 hover:shadow-2xl flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Alignment Path</h2>
                  <p className="text-xl text-secondary font-medium">Group Journey to Freedom</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  A transformational mix of group teaching and coaching, designed for those who long to heal in
                  community. You'll receive encouragement, prophetic activation, and accountability, alongside
                  Spirit-led teaching and inner healing sessions for deeper work.
                </p>

                {/* What to Expect */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-secondary" />
                    What to Expect:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">16 group sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        60 minutes every other week with teaching, prayer, and prophetic activation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Alternating weeks: group inner healing sessions (45 minutes)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Prayer declarations, renouncing spiritual blockages, and claiming God's promises
                      </span>
                    </li>
                  </ul>
                </div>

                {/* What you Receive */}
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4">What You Receive:</h3>
                  <div className="space-y-3 bg-secondary/5 p-4 rounded-lg">
                    <p className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span className="text-foreground">
                        <strong>Deep Healing</strong> that restores your heart and spirit in a communal setting
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span className="text-foreground">
                        <strong>Authority</strong> to walk daily in the power God has given you
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span className="text-foreground">
                        <strong>Transformation</strong> through God's freedom and lasting breakthrough via prophetic
                        activation
                      </span>
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6"
                  >
                    <Link href="https://buy.stripe.com/cNifZiae2ge97hx5j00Fi08" target="_blank">
                      Unlock Your Group Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Path Is Right for You?</h2>
          <p className="text-lg text-white mb-8">
            We're here to help you discern the best journey for your healing and transformation.
          </p>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default page
