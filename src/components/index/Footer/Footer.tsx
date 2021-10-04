import { Link, Stack, Typography } from "@mui/material"
import * as React from "react"
import { githubRepo } from "../../../data"
import { footerColor, onSecondary } from "../../../theme"
import IconBar from "../../common/IconBar"

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Stack
      bgcolor={footerColor}
      m="auto"
      alignItems="center"
      justifyContent="center"
      p={5}
    >
      <IconBar color="dark" />
      <Typography variant="body2" color={onSecondary}>
        Chris VL-Wanek © {new Date().getFullYear()}
      </Typography>
      <Link underline="hover" href={githubRepo} color={onSecondary}>
        View the GitHub repo
      </Link>
      <Link underline="hover" href="#" color={onSecondary}>
        Back to top
      </Link>
    </Stack>
  )
}

export default Footer
