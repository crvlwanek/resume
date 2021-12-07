import * as React from "react"
import { Box, IconButton, useTheme } from "@mui/material"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import { ColorModeContext } from "./Body"

interface DarkModeToggleProps {}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({}) => {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  return (
    <Box display="flex" alignItems="center">
      <IconButton
        onClick={colorMode.toggle}
        color="inherit"
        sx={{ height: "auto" }}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  )
}

export default DarkModeToggle
