"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import Image from "next/image"
import { CurveSeparator } from "@/components/curve-separator"

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Function will be implemented later
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            We'd love to hear from you and walk alongside you on your journey to healing
          </p>
        </div>
      </section>

      <CurveSeparator color="#F6F1EC" flip={true} />

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">

                {/* Form Section - Left */}
                <div className="p-8 sm:p-12 order-2 md:order-1">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        required
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>

                {/* Info Section - Right */}
                <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 sm:p-12 flex flex-col justify-center items-center text-center order-1 md:order-2">
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md">
                      Reach out and let us stand with you in healing, hope, and restoration
                    </p>

                    {/* Logo */}
                    <div className="pt-8">
                      <div className="relative w-48 h-48 mx-auto">
                        <Image
                          src="/aligned-logo.avif"
                          alt="Aligned Heart & Soul Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Other Ways to Connect</h3>
            <p className="text-muted-foreground mb-8">
              Have questions about our pathways or want to schedule a consultation?
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <a
                    href="mailto:info@alignedheartsoul.com"
                    className="text-primary hover:underline"
                  >
                    info@alignedheartsoul.com
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">Schedule</h4>
                  <p className="text-muted-foreground">
                    Book a free consultation to discuss your healing journey
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
