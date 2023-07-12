import { Box, Typography } from "@mui/material"
import { styled } from "@mui/system"

import Button from "@/components/Button"

import TextMarquee from "./components/TextMarquee"

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "13.8rem",
  paddingBottom: "15.5rem",
  [theme.breakpoints.down("md")]: {
    paddingTop: "6.8rem",
    paddingBottom: "11.2rem",
  },
}))

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {
    marginBottom: "0.4rem",
  },
}))

const SubTitle = styled(Typography)(({ theme }) => ({
  marginTop: "2rem",
  marginBottom: "5rem",
  maxWidth: "68rem",
  [theme.breakpoints.down("md")]: {
    marginBottom: "4rem",
  },
}))

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "3rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}))

const Header = () => {
  return (
    <Container>
      <Title variant="H1">Scroll is</Title>
      <TextMarquee />
      <SubTitle variant="Body1" textAlign="center">
        The community-first, Ethereum-equivalent zkEVM  on an open path to proof at scale.
      </SubTitle>
      <ButtonContainer>
        <Button target="_blank" color="primary">
          Bridge into Scroll
        </Button>
        <Button target="_blank">Start building</Button>
      </ButtonContainer>
    </Container>
  )
}

export default Header
