import { Header } from "@/components/header"
import dynamic from "next/dynamic"

const ClientBlogsPage = dynamic(() => import("./client-page").then((mod) => mod.ClientBlogsPage), {
  ssr: false,
})

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <ClientBlogsPage />
    </div>
  )
}

