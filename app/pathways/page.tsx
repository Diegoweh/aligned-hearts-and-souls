import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Heart, Users, ArrowRight, Sparkles, Gift, Flame, HandHeart, HeartHandshake, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CurveSeparator } from '@/components/curve-separator'

const page = () => {
  return ( 
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-brand-pink-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Transformative Pathways
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-brand-pink-foreground">
          Growth is not a one-size-fits-all formula. Some seasons require looking inward to mend your foundation, while other seasons demand looking forward to expand your influence.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-brand-pink-foreground">
          To meet you exactly where you are, we have designed three distinct, strategic pathways rooted in biblical truth and prophetic guidance:
          </p>
        </div>
      </section>
      <CurveSeparator color="#eb5942" flip={true} />

      {/* Pathways Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* THREE PATHWAYS OVERVIEW */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <div className="rounded-2xl border-2 border-primary/20 p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Pathway 1: Restoration Pathway</h3>
              <p className="text-muted-foreground leading-relaxed">
              Deep rooted one-on-one private inner healing sessions for women ready to resolve spiritual barriers and claim emotional freedom.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-primary/20 p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Pathway 2: Leadership &  Prophetic Coaching</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic, one-on-one partnerships for visionaries focused on scaling their career, mastering strategy, and protecting their peace.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary/20 p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Pathway 3: Group Discipleship Mentorship</h3>
              <p className="text-muted-foreground leading-relaxed">
                A practical, collaborative journey to build consistent spiritual habits, relational wisdom, and daily integrity.
              </p>
            </div>
          </div>

           {/* FREE GIFT BANNER */}
          <div className="relative mx-auto max-w-3xl text-center mt-16 mb-12 p-8 sm:p-12 lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">"...the free gift of God is eternal life in Christ Jesus our Lord." — Romans 6:23</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
            Receive our free gift of prayer and  first session of inner healing. Experience deep peace, healing, and spiritual alignment in your daily life. Simply sign up today to claim these two zero-cost blessings and watch God's restorative power transform your journey.
            </p>
          </div>         

          <div className="grid lg:grid-cols-2 gap-8">
            {/* MY GIFT TO YOU */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-2xl flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4">
                    <Gift className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">My Gift to You</h2>
                </div>

                {/* Description */}
                <div className="text-muted-foreground leading-relaxed mb-6 space-y-4">
                  <p>
                    I offer one <strong>complimentary healing session</strong> as a gift—an opportunity to experience this work without pressure, obligation, or expectation.
                  </p>
                  <p>
                    This single session is offered so you can prayerfully discern whether this work feels aligned for you. While I do offer paid sessions and programs, there is <strong>no requirement or expectation</strong> to continue beyond this gifted session.
                  </p>
                  <p>
                    Healing belongs to God alone. My role is simply to hold sacred space, listen, pray, and gently guide as the Holy Spirit leads. The true purpose of this session is to create space for a deeper encounter with God the Father, Jesus Christ, the Holy Spirit, and the love and restoration He offers.
                  </p>
                </div>

                {/* Scripture */}
                <div className="mb-6 text-center italic bg-primary/5 p-4 rounded-lg">
                  <p className="text-foreground">
                    &quot;You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.&quot;
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Psalm 16:11</p>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  >
                    <a
                      href="https://wa.me/19547368343?text=Hello%20I%27d%20like%20to%20request%20my%20gifted%20healing%20session"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request Your Gifted Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WOMEN'S WEEKLY PRAYER GATHERING */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-2xl flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                    <Flame className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Women&apos;s Weekly Prayer Gathering</h2>
                </div>

                {/* Description */}
                <div className="text-muted-foreground leading-relaxed mb-6 space-y-4">
                  <p>
                    I&apos;d love for you to join me in prayer each week—a morning circle for women who want to deepen their prayer life and connect with God and one another.
                  </p>
                  <p>
                    <strong>Pray with us for at least 3 months.</strong> This helps us build trust, rhythm, and meaningful connection, while knowing it&apos;s perfectly okay if life sometimes keeps you from attending.
                  </p>
                  <p>
                    We&apos;ll have a brief call or Zoom meeting to see if this is a good fit for you and to go over logistics.
                  </p>
                  <p>
                    <strong>This gathering is free.</strong> You don&apos;t need to join any healing sessions—just come as you are and experience God&apos;s presence.
                  </p>
                </div>

                {/* Scripture */}
                <div className="mb-6 text-center italic bg-primary/5 p-4 rounded-lg">
                  <p className="text-foreground">
                    &quot;For where two or three gather in my name, there am I with them.&quot;
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Matthew 18:20</p>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  >
                    <a
                      href="https://wa.me/19547368343?text=Hello%20I%27d%20like%20to%20join%20the%20Women%27s%20Weekly%20Prayer%20Gathering"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Our Prayer Circle
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <CurveSeparator color="#eb5942" />

      {/* INVEST IN YOUR GROWTH */}
      <section className="py-6 md:py-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/15 mb-6">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Invest in Your Growth</h2>
          <p className="text-lg font-semibold italic mb-4">
            &ldquo;Why am I paying for Christian mentorship? Isn&apos;t God&apos;s word free?&rdquo;
          </p>
          <p className="text-lg leading-relaxed text-white/85">
            While the Gospel of Jesus Christ is free to all, the dedicated time, professional mentorship,
            and strategic resources required to facilitate these deep-healing pathways carry an operational cost.
            Scripture reminds us that &ldquo;the worker is worthy of his wages&rdquo; (Luke 10:7) and that we should
            value the spiritual labor poured into our lives (1 Corinthians 9:14).
            When you invest in a session, you are not buying God's grace—you are honoring the specialized time and tools dedicated to your breakthrough.
          </p>
        </div>
      </section>

      <CurveSeparator color="#eb5942" flip={true} />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* RESTORATION & LEADERSHIP PATHWAYS - Individual */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-2xl flex flex-col lg:col-span-2">
              <CardContent className="p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Restoration Pathway &amp; The Leadership Pathway</h2>
                  <p className="text-xl text-primary font-medium">One-on-One Prophetic Coaching</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  Choose the Restoration Pathway for deep heart healing and deliverance, or the Leadership Pathway for
                  strategic career alignment and sustainable growth. Both options provide confidential, one-on-one
                  prophetic coaching designed to protect your peace and unlock your true identity in Christ.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Restoration column */}
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Restoration Pathway
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Personalized, Spirit-led sessions with your prophetic coach that partner with the Holy Spirit
                      for inner healing, prayer, and alignment.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          6 Session Starter Pack &mdash; 60 minutes of individualized prophetic coaching, prayer, and inner healing
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
                    </ul>
                  </div>

                  {/* Leadership column */}
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      The Leadership Pathway
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For visionaries ready to scale, build strategy, and protect their peace.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          6 Session Starter Pack &mdash; 60 minutes of individualized prophetic coaching, prayer, and inner healing
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                           Spirit-led direction for precise choices in your career, family, or business.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          Structure your calendar to scale your influence without burning out.
                        </span>
                      </li>
                      
                    </ul>
                  </div>
                </div>

                {/* CTA Button - covers both pathways */}
                <div className="mt-8 max-w-lg mx-auto w-full">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  >
                    <Link href="https://buy.stripe.com/14A6oIeui5zv9pFcLs0Fi09" target="_blank">
                      Unlock Your Pathway &mdash; Restoration or Leadership
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* What You Receive */}
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4 text-center">What You Receive:</h3>
                  <div className="grid sm:grid-cols-3 gap-4 bg-primary/5 p-6 rounded-lg">
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">
                        <strong>Strategic Foresight:</strong> Discernment to clarify choices and map clear professional expansion.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">
                        <strong>Grounded Presence:</strong> Authority to lead boldly from your true identity, free from performance anxiety.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">
                        <strong>Sustainability:</strong> Systems to calm a racing mind, preserve your energy, and protect your peace.
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            

            {/* ALIGNMENT PATH - Group */}
            <Card className="border-2 border-secondary/30 hover:border-secondary transition-all duration-300 hover:shadow-2xl flex flex-col lg:col-span-2">
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

      {/* SPONSOR A JOURNEY */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/15 mb-6">
              <HandHeart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Sponsor a Journey: The Kingdom Scholarship Fund
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              We believe financial limitations should never block someone from experiencing deep inner healing.
              Because Aligned Heart &amp; Soul is a proud program of Collaborising, a registered 501(c)(3) nonprofit
              organization, all over-and-above donations are fully tax-deductible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Book Your Session</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pay the standard rate for your personal mentorship and tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 mb-4">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Pay It Forward</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Add a donation to your booking to partially or fully sponsor a session for a believer currently facing financial hardship.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 mb-4">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Become a Kingdom Patron</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Make a one-time or monthly tax-deductible donation directly through Collaborising to fund our community scholarship pool.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              <a
                href="https://buy.stripe.com/28E5kE5XM0fb59pdPw0Fi0a"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Kingdom Patron
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
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
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6"
          >
            <a
              href="https://wa.me/19547368343?text=Hello%20I%27d%20like%20to%20schedule%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default page
