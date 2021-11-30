import * as React from "react"
import { AppBar, Box, Toolbar } from "@mui/material"
import { SvgIconComponent } from "@mui/icons-material"
import { AppBarColor, transition } from "../../theme"
import useScrollPosition from "../../hooks/useScrollPosition"

export interface NavbarMenuItem {
  name: string
  link: string
  icon: SvgIconComponent
}

export type NavbarMenu = NavbarMenuItem[]

interface NavbarProps {
  leftContent?: any
  centerContent?: any
  rightContent?: any
  transparentAtTop?: boolean
  color?: AppBarColor
  ref?: React.RefObject<HTMLDivElement>
}

const Navbar: React.FC<NavbarProps> = ({
  leftContent,
  centerContent,
  rightContent,
  transparentAtTop,
  color = "primary",
  ref,
}) => {
  var isTransparent: boolean = false
  if (transparentAtTop) {
    isTransparent = useScrollPosition((): boolean => {
      if (typeof window === "undefined") return true
      return window?.scrollY < 10
    }, null)
  }
  const appBar__color = isTransparent ? "transparent" : color
  const appBar__elevation = isTransparent ? 0 : 2
  const appBar__sx_floating = isTransparent ? { color: "white" } : null
  return (
    <AppBar
      ref={ref}
      color={appBar__color}
      elevation={appBar__elevation}
      sx={{ transition, ...appBar__sx_floating, alignItems: "center" }}
    >
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: "space-between",
          maxWidth: "1600px",
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
