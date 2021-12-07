import * as React from "react"
import { SvgIconComponent } from "@mui/icons-material"
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { primaryHover } from "../../theme"
import smoothScroll from "../../utils/smoothScroll"

export interface IconLink {
  name: string
  link: string
  icon: SvgIconComponent
}

interface NavListProps {
  direction?: "column" | "row"
  items: IconLink[]
  padded?: boolean
  toggleMenu?: () => void
}

const NavList: React.FC<NavListProps> = ({
  direction = "column",
  items,
  padded,
  toggleMenu,
}) => {
  return (
    <nav>
      <List sx={{ display: "flex", flexDirection: direction }}>
        {items.map(item => (
          <ListItemButton
            key={item.name}
            href={item.link}
            sx={{ color: "inherit", ...primaryHover }}
            onClick={() => {
              smoothScroll(`${item.name}`)
              toggleMenu && toggleMenu()
            }}
          >
            <ListItemIcon
              sx={{ color: "inherit", minWidth: padded ? null : 0, mr: 1 }}
            >
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.name.toUpperCase()} />
          </ListItemButton>
        ))}
      </List>
    </nav>
  )
}

export default NavList
