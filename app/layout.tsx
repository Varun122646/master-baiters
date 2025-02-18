import { Righteous } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={righteous.variable}>
      <body>{children}</body>
    </html>
  )
}

