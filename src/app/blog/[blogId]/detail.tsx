"use client"

import { useParams } from "next/navigation"
import { useEffect } from "react"

import { Box } from "@mui/material"
import { styled } from "@mui/system"

import useCheckViewport from "@/hooks/useCheckViewport"

import { Markdown } from "./Markdown"
import { MoreBlog } from "./MoreBlog"
import TOC from "./components/tableOfContents"

const BlogContainer = styled(Box)(
  ({ theme }) => `
    max-width: 100rem;
    padding: 8rem 6rem 14rem;
    overflow: visible;
    display: flex;
  ${theme.breakpoints.down("md")} {
    padding: 4rem 2rem;
    display: block;
    overflow: hidden;
  };
  `,
)

const BlogNavbar = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: "14rem",
  width: "40rem",
  marginLeft: "4rem",
  maxWidth: "30vw",
  paddingLeft: "2rem",
  borderLeft: `1px solid ${(theme as any).vars.palette.border.main}`,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>()

  useEffect(() => {
    // @ts-ignore
    let anchors = [...document.querySelectorAll("a")]
    anchors.map(anchor => {
      if (anchor.href.includes("/blog/")) {
        anchor.setAttribute("target", "")
      }
      return anchor
    })
  }, [blogId])

  const { isPortrait } = useCheckViewport()

  return (
    <Box>
      <BlogContainer className="wrapper">
        <Markdown blogId={blogId} />
        <Box sx={{ width: "32rem", flexShrink: 0, position: "relative" }}>
          <BlogNavbar>
            <TOC />
          </BlogNavbar>
        </Box>
      </BlogContainer>
      {isPortrait ? <MoreBlog blogId={blogId} /> : null}
    </Box>
  )
}

export default BlogDetail
