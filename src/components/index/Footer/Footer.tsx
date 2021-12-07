import { Link, Stack, Typography } from "@mui/material"
import * as React from "react"
import { githubRepo } from "../../../data"
import { onSurface } from "../../../theme"
import smoothScroll from "../../../utils/smoothScroll"
import IconBar from "../../common/IconBar"

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Stack
      m="auto"
      alignItems="center"
      justifyContent="center"
      p={5}
      color="text.primary"
    >
      <IconBar />
      <Typography variant="body1">
        Chris VL-Wanek © {new Date().getFullYear()}
      </Typography>
      <Link
        underline="hover"
        href={githubRepo}
        target="_blank"
        rel="noreferrer"
      >
        View the GitHub repo
      </Link>
      <Link
        underline="hover"
        onClick={() => smoothScroll("home")}
        sx={{ cursor: "pointer" }}
      >
        Back to top
      </Link>
    </Stack>
  )
}

export default Footer
