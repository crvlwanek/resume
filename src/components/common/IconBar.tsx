import * as React from "react"

import { Box, IconButton } from "@mui/material"

import { SocialIcon, socialIcons } from "../../data"
import { primaryHover, ThemeColor } from "../../theme"

import useIsMobile from "../../hooks/useIsMobile"

interface IconBarProps {
  color: ThemeColor
}

const IconBar: React.FC<IconBarProps> = ({ color }) => {
  const isMobile: boolean = useIsMobile()
  return (
    <Box>
      {socialIcons.map((social: SocialIcon) => (
        <IconButton
          color={color}
          key={social.name}
          href={social.link}
          sx={{ ...primaryHover }}
          size={isMobile ? "small" : "medium"}
        >
          <social.icon />
        </IconButton>
      ))}
    </Box>
  )
}

export default IconBar
