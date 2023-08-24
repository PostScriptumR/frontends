import React, { useEffect, useState } from "react"

import { Box, Typography } from "@mui/material"
import { keyframes, styled } from "@mui/system"

const TextSlider: React.FC = () => {
  const texts = ["Scalable", "Open-Source", "Cryptographically Secured", "Ethereum Aligned", "Egalitarian", "Modular"]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length)
      const regularTimer = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length)
      }, 2000)
      return () => clearInterval(regularTimer)
    }, 3000)
    return () => clearTimeout(initialTimer)
  }, [])

  return (
    <TextContainer>
      <StyledTypography variant="H1">{texts[currentIndex]}</StyledTypography>
    </TextContainer>
  )
}

const slideInOutAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(100%);
  }
  60% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
`

const TextContainer = styled(Box)({
  overflow: "hidden",
})

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  background: "#ffdbb0",
  color: "#101010",
  borderRadius: "1rem",
  lineHeight: "9.4rem",
  height: "9.4rem",
  padding: "0 2rem",
  textAlign: "center",
  animation: `${slideInOutAnimation} 2s linear infinite 2s`,
  [theme.breakpoints.down("md")]: {
    height: "auto",
    lineHeight: "4.7rem",
    padding: "0 0.9rem",
  },
}))

export default TextSlider