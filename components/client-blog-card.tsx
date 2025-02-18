"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  slug: string
  category?: string
}

export function ClientBlogCard({ title, excerpt, image, date, slug, category }: BlogCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Link href={`/blogs/${slug}`} className="block">
        <article className="bg-black/50 rounded-lg overflow-hidden border border-white/10 hover:border-brand-orange/50 transition">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition duration-700 ease-in-out group-hover:scale-105"
            />
            {category && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs font-medium">
                {category}
              </div>
            )}
          </div>
          <motion.div
            className="p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <time className="text-sm text-gray-400">{date}</time>
            <h3 className="mt-2 text-xl font-display bg-gradient-to-r from-brand-yellow to-brand-pink bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="mt-2 text-gray-300">{excerpt}</p>
          </motion.div>
        </article>
      </Link>
    </motion.div>
  )
}

