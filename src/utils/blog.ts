import { isMainnet } from "@/utils"

export interface Post {
  id: string
  title: string
  slug: string
  status: string
  created_at: string
  published_at: string
  type: string
}

export async function getPosts(): Promise<Array<Post>> {
  return await fetch(`https://misc-pages-ghost-relay.vercel.app/api/posts/${isMainnet ? "published" : "preview"}/data.json`)
    .then(res => res.json())
    .catch(() => {})
}

// format: json, html, md
export async function getPost(blogId, format = "json") {
  return await fetch(`https://misc-pages-ghost-relay.vercel.app/api/post/${blogId}.${format}`)
    .then(res => {
      if (format.toLowerCase() === "json") return res.json()
      else return res.text()
    })
    .catch(() => {})
}
