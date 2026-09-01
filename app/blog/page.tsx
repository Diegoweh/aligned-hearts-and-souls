import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const posts = [
  {
    title: "Welcome to Aligned Heart and Soul",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid0fVQ21Joysja6kGdMZ7kdSXpaJwRebHmib8MQGwM3GedsdJUDKscq8RbWfR3B7xgJl&show_text=true&width=500",
    width: 500,
    height: 626,
  },
  {
    title: "What is Inner Healing ?",
    type: "video",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1624605791966785%2F&show_text=false&width=476&t=0",
    width: 476,
    height: 476,
  },
  {
    title: "Navigating the Pain of Betrayal",
    type: "video",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2364969487358732%2F&show_text=false&width=476&t=0",
    width: 476,
    height: 476,
  },  
  {
    title: "In the Air",
    type: "video",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1325898949609644%2F&show_text=false&width=476&t=0",
    width: 476,
    height: 476,
  },
  {
    title: "A Mother's Day Prayer",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0cGXQfnMGjHCKJyRqS7fQXVFRHt1RXborSgS47d98zvmWP5dj6yopwkkwE4NsiysXl%26id%3D61581082019458&show_text=true&width=500",
    width: 500,
    height: 600,
  },
  {
    title: "Forgotten Father's",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid02BHDCnx7TT7SferR8DBo16CsTELGXf1EyuVjhPSAQLwuFB2APqu5ZBw4rN5nfpbcKl&show_text=true&width=500",
    width: 500,
    height: 706,
  },  
  {
    title: "People are people all over the world",
    type: "video",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1338998888389669%2F&show_text=false&width=476&t=0",
    width: 476,
    height: 476,
  },  
  {
    title: "He Restores My Soul",
    type: "video",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1738760013760738%2F&show_text=false&width=476&t=0",
    width: 476,
    height: 476,
  },
  {
    title: "travel the World",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid05628DbgsUXepMWzVZYhXsrxRV7p1PQzWzYJKL8cCDs7H3vKRwfr9gs4FVAvJUkY6l&show_text=true&width=500",
    width: 500,
    height: 250,
  },
  {
    title: "Protect your Oil",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid097cx374oFwCZH3JMeV3PKVZEuwEWHgN5GnGppUyc7WkJKb7M5sYaLKWRzdEoHpFdl&show_text=true&width=500",
    width: 500,
    height: 489,
  },
  {
    title: "Be Still and know God",
    type: "video",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1623892288865105%2F&show_text=false&width=476&t=0",
    width: 476,
    height: 476,
  },
  {
    title: "Subway Saga",
    type: "video",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1680329873392354%2F&show_text=false&width=476&t=0",
    width: 476,
    height: 476,
  },
  {
    title: "Unity Through Prayer",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid02DGkkN8yupmEaEQDrmDjbRHgQrME5cMHTuYgUQipxyWS3ATYzCFbGZWucfR67q3Bfl&show_text=true&width=500",
    width: 500,
    height: 495,
  },
  {
    title: "Narita Japan",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid0Q6w5ALkq5SEgJqcpeMinSwBpqcKxUmFmZjSLuqRVHBefyHaqjE1dgRSg1sr68M8pl&show_text=true&width=500",
    width: 500,
    height: 725,
  },
  {
    title: "Adventures in Asia",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid021Hk1dbVHX78nv4FpUsYsijmbh2CBVBkngwmgzWUT6WtLJdwtsoUYTRirLgKiGSCtl&show_text=true&width=500",
    width: 500,
    height: 684,
  },
  {
    title: "Let it Go",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid0h2QQRiZQLYkcecxmazebMKQUAquAoh9QdW5WTrLpJSqTsBkymM9Vx9r2vnyFHgSVl&show_text=true&width=500",
    width: 500,
    height: 489,
  },  
  {
    title: "Fiesta del Futbol",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid026eLSKyxKoZerKP2CNzqvb5im3nDA9SmCYP9v8JRu3W8FLN3N15QKw8tLVWRTHFS1l&show_text=true&width=500",
    width: 500,
    height: 731,
  },
  {
    title: "Find your Peace",
    type: "post",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flea.murray.796%2Fposts%2Fpfbid02PXqn8wp4BzDFbjTo6YMweXQLoAY1nfVFD5didoYUD6NLytztTuemEdWypGtKLtrbl&show_text=true&width=500",
    width: 500,
    height: 742,
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
                  <div
                    className="w-full overflow-hidden rounded-lg"
                    style={{ aspectRatio: `${post.width} / ${post.height}` }}
                  >
                    <iframe
                      src={post.src}
                      className="w-full h-full"
                      style={{ border: "none" }}
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
