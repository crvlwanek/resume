import * as React from "react"
import { Stack } from "@mui/material"
import { background } from "../../../theme"

interface SectionGridProps {}

const SectionGrid: React.FC<SectionGridProps> = ({ children }) => {
  return (
    <Stack
      spacing={2}
      pt={2}
      pb={2}
      sx={{ bgcolor: background, width: "100%", alignItems: "center" }}
    >
      {children}
    </Stack>
  )
}

export default SectionGrid
