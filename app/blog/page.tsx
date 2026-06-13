import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const posts = [
  {
    title: "Featured Reel",
    type: "video",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1624605791966785%2F&show_text=false&width=476&t=0",
    width: 476,
    height: 476,
  },
  {
    title: "Latest Post",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0cGXQfnMGjHCKJyRqS7fQXVFRHt1RXborSgS47d98zvmWP5dj6yopwkkwE4NsiysXl%26id%3D61581082019458&show_text=true&width=500",
    width: 500,
    height: 600,
  },
]

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-brand-pink text-brand-pink-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Blog</h1>
            <p className="mt-4 text-lg text-brand-pink-foreground">
              Inspiration, teachings, and moments from our journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 justify-items-center">
            {posts.map((post) => (
              <Card key={post.title} className="border-2 border-primary/20 overflow-hidden w-full max-w-[500px]">
                <CardContent className="p-4 sm:p-6 flex flex-col items-center">
                  <h2 className="text-xl font-bold mb-4 self-start">{post.title}</h2>
                  <div className="w-full overflow-hidden rounded-lg flex justify-center">
                    <iframe
                      src={post.src}
                      width={post.width}
                      height={post.height}
                      style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={post.title}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
