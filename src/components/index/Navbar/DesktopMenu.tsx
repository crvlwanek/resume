import * as React from "react"
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { navbarMenu } from "../../../data"
import { primaryHover } from "../../../theme"
import { NavbarMenuItem } from "../../common/Navbar"
import smoothScroll from "../../../utils/smoothScroll"

interface DesktopMenuProps {}

const DesktopMenu: React.FC<DesktopMenuProps> = ({}) => {
  return (
    <List sx={{ display: "flex", flexDirection: "row" }}>
      {navbarMenu.map((item: NavbarMenuItem) => (
        <ListItemButton
          key={item.name}
          onClick={() => smoothScroll(item.name)}
          sx={{
            ...primaryHover,
          }}
        >
          <ListItemText
            primary={item.name.toUpperCase()}
            sx={{ marginRight: 1 }}
          />
          <ListItemIcon sx={{ minWidth: 0, color: "inherit" }}>
            <item.icon />
          </ListItemIcon>
        </ListItemButton>
      ))}
    </List>
  )
}

export default DesktopMenu
