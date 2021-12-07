import * as React from "react"
import { Stack } from "@mui/material"

interface SectionGridProps {}

const SectionGrid: React.FC<SectionGridProps> = ({ children }) => {
  return (
    <Stack
      sx={{
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
