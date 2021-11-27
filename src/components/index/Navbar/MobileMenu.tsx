import * as React from "react"
import { Box, Divider, Typography } from "@mui/material"
import { primaryHover } from "../../../theme"
import { navbarMenu, titleBlock } from "../../../data"
import useToggle from "../../../hooks/useToggle"
import NavDrawer from "../../common/NavDrawer"
import MyAvatar from "../MyAvatar"
import NavList from "../../common/NavList"
import AvatarTitleBlock from "../AvatarTitleBlock"

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [open, toggleOpen] = useToggle()
  return (
    <NavDrawer open={open} toggleOpen={toggleOpen} sx={{ ...primaryHover }}>
      <AvatarTitleBlock
        boxSx={{ p: 2 }}
        avatarSize="6rem"
        avatarSx={{ mb: 1 }}
        headerVariant="h6"
        subheaderVariant="subtitle1"
      />
      <Divider />
      <NavList items={navbarMenu} padded />
    </NavDrawer>
  )
}

export default MobileMenu
