import * as React from "react"
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { primaryHover, transition } from "../../../theme"
import { navbarMenu } from "../../../data"
import useWindowWidth from "../../../hooks/useWindowWidth"
import { NavbarMenuItem } from "../../common/Navbar"
import MenuMask from "./MenuMask"

interface MobileMenuProps {
  open: boolean
  toggleOpen: React.MouseEventHandler
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, toggleOpen }) => {
  const windowWidth = useWindowWidth()
  return (
    <>
      <IconButton color="inherit" onClick={toggleOpen} sx={{ ...primaryHover }}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      {open ? (
        <MenuMask onClick={toggleOpen}>
          <List
            sx={{
              color: "surface.contrastText",
              bgcolor: "surface.main",
              width: "80vw",
              height: "100%",
              paddingLeft: 2,
              transition,
            }}
          >
            <ListItem sx={{ flexDirection: "row-reverse" }}>
              <IconButton sx={{ ...primaryHover }}>
                <CloseIcon />
              </IconButton>
            </ListItem>
            {navbarMenu.map((item: NavbarMenuItem) => (
              <ListItemButton
                key={item.name}
                component="a"
                href={item.link}
                sx={{ ...primaryHover, paddingRight: 5 }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name.toUpperCase()} />
              </ListItemButton>
            ))}
          </List>
        </MenuMask>
      ) : null}
    </>
  )
}

export default MobileMenu
