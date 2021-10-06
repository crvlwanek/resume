import * as React from "react"
import { Drawer, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { primaryHover } from "../../theme"

interface NavDrawerProps {
  open: boolean
  toggleOpen: React.MouseEventHandler
}

const NavDrawer: React.FC<NavDrawerProps> = ({
  children,
  open,
  toggleOpen,
}) => {
  return (
    <>
      <IconButton color="inherit" onClick={toggleOpen} sx={{ ...primaryHover }}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleOpen}>
        {children}
      </Drawer>
    </>
  )
}

export default NavDrawer
