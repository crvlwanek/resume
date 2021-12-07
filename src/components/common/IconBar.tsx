import { Box, IconButton } from "@mui/material"
import * as React from "react"
import { SocialIcon, socialIcons } from "../../data"
import useIsMobile from "../../hooks/useIsMobile"
import { MuiSxMixin } from "../../interfaces/mui"
import { primaryHover } from "../../theme"

interface IconBarProps extends MuiSxMixin {}

const IconBar: React.FC<IconBarProps> = ({ sx }) => {
  const isMobile: boolean = useIsMobile()
  return (
    <Box sx={sx}>
      {socialIcons.map((social: SocialIcon) => (
        <IconButton
          color="inherit"
          key={social.name}
          component="a"
          href={social.link}
          target="_blank"
          rel="noreferrer"
          sx={{ ...primaryHover, ...sx }}
          size={isMobile ? "small" : "medium"}
        >
          <social.icon />
        </IconButton>
      ))}
    </Box>
  )
}

export default IconBar
