import dynamic from "next/dynamic"

const ClientHero = dynamic(() => import("./client-hero").then((mod) => mod.ClientHero), {
  ssr: false,
})

export function Hero() {
  return <ClientHero />
}

