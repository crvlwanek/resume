import * as React from "react"
import { Drawer, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { primaryHover } from "../../theme"
import useToggle from "../../hooks/useToggle"

interface NavDrawerProps {}

const NavDrawer: React.FC<NavDrawerProps> = ({ children }) => {
  const [open, toggleOpen] = useToggle()
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
