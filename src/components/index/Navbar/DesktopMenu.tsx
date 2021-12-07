import { Box } from "@mui/material"
import * as React from "react"
import { navbarMenu } from "../../../data"
import DarkModeToggle from "../../common/DarkModeToggle"
import NavList from "../../common/NavList"

interface DesktopMenuProps {}

const DesktopMenu: React.FC<DesktopMenuProps> = ({}) => {
  return (
    <Box display="flex">
      <NavList direction="row" items={navbarMenu} />
      <DarkModeToggle />
    </Box>
  )
}

export default DesktopMenu
