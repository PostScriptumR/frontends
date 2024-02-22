import { useRouter } from "next/navigation"
import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

export async function Markdown({ blogId }) {
  const router = useRouter()
  const markdownString = await fetch(`https://misc-pages-ghost-relay.vercel.app/api/post/${blogId.toLowerCase()}.md?title=1`)
    .then(res => res.text())
    .catch(() => {})
  if (!markdownString) router.push("/404")
  return (
    <ReactMarkdown
      children={markdownString as string}
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      className="markdown-body"
    />
  )
}
