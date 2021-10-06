import { Stack } from "@mui/material"
import * as React from "react"
import { MuiSxMixin } from "../../interfaces/mui"

interface PStackProps extends MuiSxMixin {
  p: number
  direction?: "column" | "row"
}

const PStack: React.FC<PStackProps> = ({
  children,
  direction = "column",
  p,
  sx,
}) => {
  return (
    <Stack sx={sx} direction={direction} p={p} spacing={p}>
      {children}
    </Stack>
  )
}

export default PStack
