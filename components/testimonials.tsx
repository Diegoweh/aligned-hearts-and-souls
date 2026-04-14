import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Presilla",
    location: "California",
    text: "I am so grateful to Lea for the healing session we had last week. Her calm voice and guiding words made way for me to ask Father God the things I did not know I wanted to ask. For the first time, I forgave myself. Thank you Lea for an unforgettable encounter.",
  },
  {
    name: "Terrie",
    location: "México",
    text: "Just a quick note to say thank you for standing in the gap with me the other day. The Bible says 'where two or more are gathered in my name, there shall I be.' When the session was over, my spirit felt calmer, peaceful. I really appreciate you.",
  },
  {
    name: "Julie",
    location: "Washington",
    text: "My guided meditation session with Lea Murray through Aligned Heart and Soul was a truly meaningful experience. Lea was a genuine spiritual guide creating a safe and peaceful space for reflection on the areas of my life where I want to bring God closer. The session felt deeply meditative and intentional. Lea did a beautiful job of setting clear expectations, asking thoughtful and insightful questions, and giving me the freedom to share - or simply reflect quietly. I felt supported, never pressured, and completely at ease throughout the experience. I'm so grateful for the clarity and spiritual grounding I gained in our time together.",
  },
]

function initials(name: string) {
  return name.charAt(0).toUpperCase()
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-background via-muted/40 to-background overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Hearts Restored, Souls Aligned
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories of healing, peace, and spiritual grounding from those who walked the journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="group relative border-2 bg-card/80 backdrop-blur-sm hover:border-primary hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="h-10 w-10 text-primary/30 mb-4 flex-shrink-0 group-hover:text-primary/60 transition-colors" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed italic mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg flex-shrink-0">
                    {initials(t.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground leading-tight">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
