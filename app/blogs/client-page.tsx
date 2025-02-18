"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BlogCard } from "@/components/blog-card"
import { Input } from "@/components/ui/input"

// Sample blog posts data
const ALL_POSTS = [
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
  // Add more blog posts...
]

const categories = ["All", "Drama", "Influencers", "News", "Entertainment"]

export function ClientBlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = ALL_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="font-display text-4xl sm:text-5xl bg-gradient-to-r from-brand-yellow to-brand-pink bg-clip-text text-transparent mb-4">
          Latest News & Stories
        </h1>
        <p className="text-gray-400 text-lg">Stay up to date with the latest influencer news and drama</p>
      </motion.div>

      <div className="max-w-4xl mx-auto mb-12 space-y-6">
        <Input
          type="search"
          placeholder="Search articles..."
          className="bg-white/5 border-white/10 text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-brand-yellow to-brand-pink text-black"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <BlogCard {...post} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}

