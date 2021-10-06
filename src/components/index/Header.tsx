import * as React from "react"
import { Box } from "@mui/material"

interface HeaderProps {
  height: string
}

const Header: React.FC<HeaderProps> = ({ height, children }) => {
  return (
    <Box id="home" height={height}>
      {children}
    </Box>
  )
}

export default Header
