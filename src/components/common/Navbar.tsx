import * as React from "react"
import { AppBar, Toolbar } from "@mui/material"
import { transition } from "../../theme"
import { IconLink } from "../../data"
import useIsMobile from "../../hooks/useIsMobile"
import useScrollAtTop from "../../hooks/useScrollAtTop"
import FlexStart from "./FlexStart"
import FlexCenter from "./FlexCenter"
import FlexEnd from "./FlexEnd"

export type NavbarMenuItem = IconLink

export type NavbarMenu = NavbarMenuItem[]

interface NavbarProps {
  leftContent?: any
  centerContent?: any
  rightContent?: any
  floatAtTop?: boolean
  menuOpen?: boolean
  color?: "primary" | "secondary"
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
      <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
        <FlexStart>{leftContent}</FlexStart>
        <FlexCenter>{centerContent}</FlexCenter>
        <FlexEnd>{rightContent}</FlexEnd>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
