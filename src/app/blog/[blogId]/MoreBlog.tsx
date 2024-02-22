import { shuffle } from "lodash"

import { Box, Typography } from "@mui/material"

import { usePosts } from "@/hooks/usePosts"

import Articles from "./articles"

export function MoreBlog({ blogId }) {
  const blogSource = usePosts()
  const blogs = shuffle(blogSource.filter(blog => blog.id !== blogId.toLowerCase())).slice(0, 3)

  return (
    <Box sx={{ paddingBottom: "10rem" }}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          mt: ["3rem", "5rem"],
          mb: ["2rem", "3rem"],
        }}
      >
        More articles from Scroll
      </Typography>
      <Articles blogs={blogs} />
    </Box>
  )
}
