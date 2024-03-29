import * as React from "react"

import { Paper, Typography } from "@mui/material"

interface GenericSectionProps {
  name: string
}

const GenericSection: React.FC<GenericSectionProps> = ({ children, name }) => {
  return (
    <Paper component="section" elevation={3} sx={{ width: "100%" }}>
      <a id={name} style={{ position: "relative", top: "-55px" }}></a>
      <Typography variant="h5" p={2}>
        {name[0].toUpperCase() + name.slice(1)}
      </Typography>
      {children}
    </Paper>
  )
}

export default GenericSection
