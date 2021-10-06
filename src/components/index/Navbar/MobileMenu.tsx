import * as React from "react"
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import { primaryHover, transition } from "../../../theme"
import { navbarMenu, titleBlock } from "../../../data"
import { NavbarMenuItem } from "../../common/Navbar"
import NavDrawer from "../../common/NavDrawer"
import MyAvatar from "../AvatarBox/MyAvatar"

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  return (
    <NavDrawer>
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
        <MyAvatar size="6rem" sx={{ mt: 1 }} />
        <ListItemText disableTypography>
          <Typography variant="h6">{titleBlock.name}</Typography>
        </ListItemText>
        <ListItemText disableTypography sx={{ pb: 1 }}>
          <Typography variant="subtitle1">{titleBlock.jobTitle}</Typography>
        </ListItemText>
        <Divider />
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
    </NavDrawer>
  )
}

export default MobileMenu
