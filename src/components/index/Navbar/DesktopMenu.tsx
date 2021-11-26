import * as React from "react"
import { navbarMenu } from "../../../data"
import NavList from "../../common/NavList"

interface DesktopMenuProps {}

const DesktopMenu: React.FC<DesktopMenuProps> = ({}) => {
  return <NavList direction="row" items={navbarMenu} />
}

export default DesktopMenu
