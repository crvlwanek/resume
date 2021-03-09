import { Box } from "@material-ui/core"
import React from "react"

const styles = {
  outer: {
    position: "absolute",
    padding: "0",
    width: "100%",
    top: "250px",
  },
  box1: {
    backgroundColor: "#14274e",
    height: "70px",
  },
  box2: {
    backgroundColor: "#394867",
    height: "40px",
  },
}

export const ColorStripe = () => {
  return (
    <Box style={styles.outer}>
      <Box style={styles.box1} />
      <Box style={styles.box2} />
    </Box>
  )
}
