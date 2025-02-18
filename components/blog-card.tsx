import dynamic from "next/dynamic"

const ClientBlogCard = dynamic(() => import("./client-blog-card").then((mod) => mod.ClientBlogCard), {
  ssr: false,
})

export const BlogCard = ClientBlogCard

