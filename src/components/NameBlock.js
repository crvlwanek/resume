import * as React from "react"

import { Box, Typography } from "@material-ui/core"

import IconBar from "./IconBar"

const NameBlock = () => {
  return (
    <Box textAlign="center">
      <Typography className="name-text" variant="h4">
        Chris Van Lanen-Wanek
      </Typography>
      <Typography
        className="name-detail-text"
        variant="body1"
        color="textSecondary"
      >
        Software Engineer | Web Developer
      </Typography>
      <IconBar padding />
    </Box>
  )
}

export default NameBlock
