import { Divider } from "@mui/material"
import * as React from "react"
import { navbarMenu } from "../../../data"
import useToggle from "../../../hooks/useToggle"
import { primaryHover } from "../../../theme"
import NavDrawer from "../../common/NavDrawer"
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
      <NavList toggleMenu={toggleOpen} items={navbarMenu} padded />
    </NavDrawer>
  )
}

export default MobileMenu
