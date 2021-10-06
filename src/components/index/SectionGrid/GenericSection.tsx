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
      sx={{ maxWidth: desktopMaxWidth, width: "100%" }}
    >
      <a id={name} style={{ position: "relative", top: "-70px" }}></a>
      <Typography variant="h5" paddingX={2} pt={2} pb={1}>
        {name[0].toUpperCase() + name.slice(1)}
      </Typography>
      {children}
    </Paper>
  )
}

export default GenericSection
