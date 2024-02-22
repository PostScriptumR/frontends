import { orderBy } from "lodash"
import { useRouter } from "next/navigation"

import { Box } from "@mui/material"
import { styled } from "@mui/system"

import ArticleCard from "@/components/ArticleCard"
import { usePosts } from "@/hooks/usePosts"

const BlogBox = styled(Box)(({ theme }) => ({
  marginBottom: "9rem",
  [theme.breakpoints.down("md")]: {
    marginBottom: "0",
    padding: "3rem 0",
    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${(theme as any).vars.palette.themeBackground.highlight}`,
    },
    "&:first-of-type": {
      padding: "0 0 3rem",
    },
  },
}))

const BlogListStyle = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    borderRight: "none",
    marginBottom: "0",
    justifyContent: "center",
  },
}))

export function BlogList({ sort, category, isDesktop }) {
  const router = useRouter()
  const blogSource = usePosts()
  if (!blogSource.length) router.push("/404")

  const blogs = orderBy(
    blogSource.filter(blog => blog.type === category || category === "All"),
    "date",
    sort === "Newest" ? "desc" : "asc",
  )
  return (
    <BlogListStyle>
      {blogs.map(blog => (
        <BlogBox key={blog.id}>
          <ArticleCard small={!isDesktop} blog={blog} />
        </BlogBox>
      ))}
    </BlogListStyle>
  )
}
