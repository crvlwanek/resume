import * as React from "react"
import { Box } from "@mui/material"
import { MuiSxMixin } from "../../interfaces/mui"

interface FlexAlignCenterProps extends MuiSxMixin {
  justify:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
}

const FlexAlignCenter: React.FC<FlexAlignCenterProps> = ({
  children,
  justify,
  sx,
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent={justify} sx={sx}>
      {children}
    </Box>
  )
}

export default FlexAlignCenter
