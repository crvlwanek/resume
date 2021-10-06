import * as React from "react"
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import { primaryHover, transition } from "../../../theme"
import { navbarMenu, titleBlock } from "../../../data"
import useToggle from "../../../hooks/useToggle"
import smoothScroll from "../../../utils/smoothScroll"
import { NavbarMenuItem } from "../../common/Navbar"
import NavDrawer from "../../common/NavDrawer"
import MyAvatar from "../AvatarBox/MyAvatar"

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [open, toggleOpen] = useToggle()
  return (
    <NavDrawer open={open} toggleOpen={toggleOpen}>
      <List
        disablePadding
        sx={{
          color: "surface.contrastText",
          bgcolor: "surface.main",
          width: "80vw",
          height: "100%",
          transition,
        }}
      >
        <Box p={2}>
          <MyAvatar size="6rem" sx={{ mb: 1 }} />
          <ListItemText disableTypography sx={{ m: 0 }}>
            <Typography variant="h6">{titleBlock.name}</Typography>
          </ListItemText>
          <ListItemText disableTypography sx={{ m: 0 }}>
            <Typography variant="subtitle1">{titleBlock.jobTitle}</Typography>
          </ListItemText>
        </Box>
        <Divider variant="fullWidth" sx={{ mb: 2 }} />
        {navbarMenu.map((item: NavbarMenuItem) => (
          <ListItemButton
            key={item.name}
            onClick={e => {
              toggleOpen(e)
              setTimeout(() => smoothScroll(item.name), 1)
            }}
            sx={{ ...primaryHover }}
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
