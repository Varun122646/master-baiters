import { Header } from "@/components/header"
import dynamic from "next/dynamic"

const ClientAboutPage = dynamic(() => import("./client-page").then((mod) => mod.ClientAboutPage), {
  ssr: false,
})

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <ClientAboutPage />
    </div>
  )
}

