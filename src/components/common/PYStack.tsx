import * as React from "react"
import { Stack } from "@mui/material"
import { MuiSxMixin } from "../../interfaces/mui"

interface PYStackProps extends MuiSxMixin {
  p?: number
}

const PYStack: React.FC<PYStackProps> = ({ children, p = 1, sx }) => {
  return (
    <Stack spacing={p} pt={p} pb={p} sx={sx}>
      {children}
    </Stack>
  )
}

export default PYStack
