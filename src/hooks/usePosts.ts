import { useState } from "react"
import { useEffectOnce } from "react-use"

import { Post, getPosts } from "@/utils/blog"

let POSTS: Array<Post> = []

// TODO: replace this with server component
export function usePosts() {
  const [posts, setPosts] = useState(POSTS)
  useEffectOnce(() => {
    if (POSTS.length) return
    getPosts().then(p => {
      POSTS = p
      setPosts(p)
    })
  })

  return posts
}
