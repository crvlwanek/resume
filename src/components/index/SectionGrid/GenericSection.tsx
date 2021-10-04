import * as React from "react"

import { Paper, Typography } from "@mui/material"
import { desktopMaxWidth } from "../../../theme"

interface GenericSectionProps {
  name: string
}

const GenericSection: React.FC<GenericSectionProps> = ({ children, name }) => {
  return (
    <Paper
      component="section"
      sx={{ maxWidth: desktopMaxWidth, padding: 2, width: "100%" }}
    >
      <a id={name} style={{ position: "relative", top: "-90px" }}></a>
      <Typography variant="h3" paddingX={1} overflow="hidden">
        {name[0].toUpperCase() + name.slice(1)}
      </Typography>
      {children}
    </Paper>
  )
}

export default GenericSection
