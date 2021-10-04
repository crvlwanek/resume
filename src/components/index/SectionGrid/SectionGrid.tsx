import * as React from "react"

import { Stack } from "@mui/material"
import { backgroundColor } from "../../../theme"

interface SectionGridProps {}

const SectionGrid: React.FC<SectionGridProps> = ({ children }) => {
  return (
    <Stack
      spacing={2}
      bgcolor={backgroundColor}
      width="100%"
      alignItems="center"
      padding={2}
    >
      {children}
    </Stack>
  )
}

export default SectionGrid
