import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%205@4x-rSpBkPM1RCvnASceXBNkfehgrqRTfR.png"
            alt="Master Baiters Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8 font-display text-white">
          <Link href="/" className="hover:text-brand-yellow transition">
            Home
          </Link>
          <Link href="/blogs" className="hover:text-brand-yellow transition">
            Blogs
          </Link>
          <Link href="/youtube" className="hover:text-brand-yellow transition">
            YouTube
          </Link>
          <Link href="/about" className="hover:text-brand-yellow transition">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}

