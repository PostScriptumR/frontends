import type { Metadata } from "next"
import { headers } from "next/headers"

import { getPost } from "@/utils"

import Detail from "./detail"

export async function generateMetadata({ params }): Promise<Metadata> {
  const { origin } = new URL(headers().get("x-url")!)
  const currentBlog = await getPost(params.blogId, "json")

  const title = `${currentBlog?.title} - Scroll`
  const description = currentBlog?.summary
  const imgUrl = currentBlog?.ogImg || currentBlog?.posterImg || ""
  const url = currentBlog?.canonical || `https://scroll.io/blog/${currentBlog?.id}`

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [imgUrl],
    },
    twitter: {
      title,
      description,
      images: [imgUrl],
    },
    alternates: {
      canonical: currentBlog?.canonical,
    },
  }
}

const BlogDetail = () => {
  return <Detail></Detail>
}

export default BlogDetail
