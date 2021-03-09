import { Container } from "@material-ui/core"
import React from "react"

const classes = {
  avatar: {
    height: "300px",
    width: "300px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "300px",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "3px",
    position: "relative",
    filter: `drop-shadow(3px 3px 4px black)`,
  },
  box: {
    maxWidth: "none",
    textAlign: "center",
    position: "relative",
    bottom: "200px",
    marginBottom: "-200px",
  },
}

export const Avatar = () => {
  return (
    <Container style={classes.box} alignItems="center">
      <img alt="Avatar" className="avatar" style={classes.avatar} />
    </Container>
  )
}
