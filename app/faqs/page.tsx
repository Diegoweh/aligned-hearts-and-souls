"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CurveSeparator } from "@/components/curve-separator"

const page = () => {
  const faqs = [
    {
      question: "Who is this program for?",
      answer: (
        <>
          <p className="mb-4">
            This program is for believers who desire deeper emotional and spiritual healing and who have at least a
            basic awareness of biblical heart healing and deliverance.
          </p>
          <p className="mb-4">
            My preference is to work with individuals who come with a willing and teachable heart—people who are
            ready to invite the Holy Spirit into wounded places, confront unhealthy patterns, and receive God's
            truth.
          </p>
          <p className="mb-4">
            At the same time, the heart of this ministry reflects Jesus, who said:
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic mb-4 text-muted-foreground">
            "It is not the healthy who need a doctor, but the sick. I have not come to call the righteous, but
            sinners."
            <span className="block mt-2 text-sm">— Mark 2:17</span>
          </blockquote>
          <p>
            So whether you're familiar with these concepts or simply know you need healing, you are welcome—if
            you're open, humble, and ready to partner with God in the process.
          </p>
        </>
      ),
    },
    {
      question: "What can I expect during a coaching or healing session?",
      answer: (
        <>
          <p className="mb-4">
            Sessions are Spirit-led, prayerful, and deeply personal. You can expect:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Guided prayer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Emotional healing work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Breaking agreements and lies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Hearing God's voice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Releasing burdens</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Inner restoration of identity and peace</span>
            </li>
          </ul>
          <p>
            There is no force, pressure, or hype — only a safe space for the Holy Spirit to move in truth and love.
          </p>
        </>
      ),
    },
    {
      question: "What is the difference between heart healing and deliverance?",
      answer: (
        <>
          <p className="mb-4">
            <strong className="text-primary">Heart Healing</strong> focuses on emotional wounds, past hurts, and the
            internal narratives that shape how you see yourself, God, and others. Through prayer and Holy
            Spirit–led reflection, we identify lies you've believed, release emotional pain, and invite God's truth
            into those areas.
          </p>
          <p className="mb-4">
            <strong className="text-secondary">Deliverance</strong> addresses the spiritual roots behind recurring
            patterns such as fear, rejection, shame, confusion, or oppression. It involves renouncing agreements,
            breaking spiritual strongholds, and restoring authority in Christ.
          </p>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="font-semibold mb-2">Together:</p>
            <p className="mb-2">Heart healing restores what has been wounded.</p>
            <p className="mb-2">Deliverance removes what has been oppressing.</p>
            <p className="font-medium">Both work hand in hand to produce lasting freedom.</p>
          </div>
        </>
      ),
    },
    {
      question: "Do you have payment plans?",
      answer: (
        <>
          <p className="mb-4">
            <strong>Yes.</strong> We want to make this easy and convenient for you.
          </p>
          <p>
            Payment plans are available for all programs so you can choose the option that best supports your
            financial peace while still receiving the full value of the experience.
          </p>
        </>
      ),
    },
    {
      question: "What does prophetic coaching mean?",
      answer: (
        <>
          <p className="mb-4">
            Prophetic coaching is a Holy Spirit–led approach that blends practical guidance with spiritual insight.
            It means:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Listening for God's heart, direction, and truth for your situation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Speaking encouragement, identity, and revelation as the Spirit leads</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Helping you discern what God is showing you about your patterns, calling, and healing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Partnering with Scripture and prayer to guide your next steps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Supporting you in aligning your thoughts, emotions, and decisions with God's truth</span>
            </li>
          </ul>
          <p>
            It is not fortune-telling or controlling; it is gentle, biblically grounded, and focused on
            restoration, clarity, and alignment with God's purpose for your life.
          </p>
        </>
      ),
    },
    {
      question: "Do I need to have prior experience with inner healing or deliverance?",
      answer: (
        <>
          <p className="mb-4">
            <strong>No.</strong> While having some basic understanding helps you go deeper more quickly, it is not
            required.
          </p>
          <p className="mb-4">
            What matters most is a willing, teachable, and surrendered heart.
          </p>
          <p className="mb-4">If you're new to these concepts, I will guide you gently:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Explaining each step</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Supporting you through the process</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Ensuring you feel safe, informed, and empowered</span>
            </li>
          </ul>
          <p className="font-medium">You don't need expertise — just openness to the work God wants to do.</p>
        </>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Find answers to common questions about our Spirit-led healing pathways
          </p>
        </div>
      </section>
      <CurveSeparator color="#F6F1EC" flip={true} />

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-muted rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-lg text-white/90 mb-8">
            We'd love to connect with you and help you find the right path for your healing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 shadow-xl">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 shadow-xl"
            >
              View Our Pathways
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
