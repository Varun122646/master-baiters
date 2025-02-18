import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BlogCard } from "@/components/blog-card"

const FEATURED_POSTS = [
  {
    title: "Top 10 YouTube Drama Moments of 2024",
    excerpt: "From unexpected collaborations to shocking revelations, here's what kept us entertained...",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 10, 2024",
    slug: "top-10-youtube-drama-2024",
    category: "Drama",
  },
  {
    title: "Rising Stars: New Influencers to Watch",
    excerpt: "These content creators are taking social media by storm with their unique approach...",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 9, 2024",
    slug: "rising-stars-new-influencers",
    category: "Influencers",
  },
  {
    title: "The Evolution of Content Creation",
    excerpt: "How social media content has transformed from simple vlogs to production-quality entertainment...",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 8, 2024",
    slug: "evolution-content-creation",
    category: "News",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-16">
        <h2 className="font-display text-3xl mb-8 bg-gradient-to-r from-brand-yellow to-brand-pink bg-clip-text text-transparent">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_POSTS.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </main>
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Master Baiters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

