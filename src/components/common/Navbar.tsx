import * as React from "react"
import { AppBar, Box, Toolbar } from "@mui/material"
import { AppBarColor, transition } from "../../theme"
import { IconLink } from "../../data"
import useIsMobile from "../../hooks/useIsMobile"
import useScrollAtTop from "../../hooks/useScrollAtTop"

export type NavbarMenuItem = IconLink

export type NavbarMenu = NavbarMenuItem[]

interface NavbarProps {
  leftContent?: any
  centerContent?: any
  rightContent?: any
  floatAtTop?: boolean
  menuOpen?: boolean
  color?: AppBarColor
}

const Navbar: React.FC<NavbarProps> = ({
  leftContent,
  centerContent,
  rightContent,
  floatAtTop,
  menuOpen,
  color = "primary",
}) => {
  const isMobile: boolean = useIsMobile()
  const mobileMenuOpen: boolean = isMobile && !!menuOpen
  var isFloating: boolean = false
  if (floatAtTop) {
    const scrollAtTop: boolean = useScrollAtTop()
    isFloating = scrollAtTop && !mobileMenuOpen
  }
  const appBar__color = isFloating ? "transparent" : color
  const appBar__elevation = isFloating ? 0 : 2
  const appBar__sx_floating = isFloating ? { color: "white" } : null
  return (
    <AppBar
      color={appBar__color}
      elevation={appBar__elevation}
      sx={{ transition, ...appBar__sx_floating }}
    >
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: "space-between",
          maxWidth: "1330px",
        }}
      >
        <Box className="navbar__leftContent">{leftContent}</Box>
        <Box className="navbar__centerContent">{centerContent}</Box>
        <Box className="navbar__rightContent">{rightContent}</Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
