import * as React from "react"
import { background } from "../../../theme"
import { Stack } from "@mui/material"

interface SectionGridProps {}

const SectionGrid: React.FC<SectionGridProps> = ({ children }) => {
  return (
    <Stack
      sx={{
        bgcolor: background,
        width: "100%",
        alignItems: "center",
      }}
      gap={2}
    >
      {children}
    </Stack>
  )
}

export default SectionGrid
