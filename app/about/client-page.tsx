"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Youtube, Instagram, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & Lead Content Creator",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      youtube: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  // Add more team members...
]

export function ClientAboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="font-display text-4xl sm:text-5xl bg-gradient-to-r from-brand-yellow to-brand-pink bg-clip-text text-transparent mb-6">
          About Master Baiters
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Your go-to source for the juiciest influencer news and entertainment
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-brand-orange/20 p-8 md:p-12 mb-20"
      >
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-6">
            We believe in bringing you the most entertaining and engaging content from the world of social media. Our
            mission is to keep you informed while keeping it fun and authentic.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-4 rounded-lg bg-white/5">
              <h3 className="font-display text-xl mb-2">Entertainment</h3>
              <p className="text-gray-400">Bringing you the most engaging content</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <h3 className="font-display text-xl mb-2">Authenticity</h3>
              <p className="text-gray-400">Always keeping it real with our audience</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <h3 className="font-display text-xl mb-2">Community</h3>
              <p className="text-gray-400">Building connections through content</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="font-display text-3xl text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-white/5 p-6">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full transition group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl text-center mb-2">{member.name}</h3>
                <p className="text-gray-400 text-center mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.socials.youtube} className="text-gray-400 hover:text-brand-yellow transition">
                    <Youtube size={20} />
                  </a>
                  <a href={member.socials.instagram} className="text-gray-400 hover:text-brand-pink transition">
                    <Instagram size={20} />
                  </a>
                  <a href={member.socials.twitter} className="text-gray-400 hover:text-brand-yellow transition">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-8">Have a tip or want to collaborate? We'd love to hear from you!</p>
        <a
          href="mailto:contact@masterbaiters.com"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-brand-yellow to-brand-pink text-black font-display hover:scale-105 transition"
        >
          Contact Us
        </a>
      </motion.section>
    </main>
  )
}

