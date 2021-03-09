import { Box } from "@material-ui/core"
import React from "react"

const classes = {
  banner: {
    height: "300px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}

export const Banner = () => {
  return <Box className="banner" style={classes.banner} />
}
