"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import BG from "@/public/BG.png" // Ensure image is inside "public" folder

export function ClientHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [disableSpotlight, setDisableSpotlight] = useState(false)

  // Handle Mouse Move (Only if spotlight is enabled)
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disableSpotlight) {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
  }

  // Handle Mouse Enter (Enable Spotlight)
  const handleMouseEnter = () => setIsHovered(true)

  // Handle Mouse Leave (Disable Spotlight)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image (Dull) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BG || "/placeholder.svg"}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-40" // Keeps background dull
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Spotlight Effect (Brighter and More Visible) */}
      {isHovered && !disableSpotlight && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 80%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />
      )}

      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content (Prevents Spotlight Over Text) */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setDisableSpotlight(true)} // Disable spotlight over text
          onMouseLeave={() => setDisableSpotlight(false)} // Re-enable spotlight when leaving text
        >
          <motion.h1
            className="font-display text-5xl sm:text-7xl bg-gradient-to-b from-brand-yellow to-brand-pink bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your Daily Dose of Influencer Drama
          </motion.h1>
          <motion.p
            className="mt-6 text-xl leading-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Stay updated with the latest influencer news, drama, and entertainment. We cover everything from YouTube to
            TikTok and beyond!
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/blogs"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-yellow to-brand-pink text-black font-display hover:scale-105 transition"
            >
              Read Latest News
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-brand-orange/50 transition"
            >
              Watch on YouTube
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

