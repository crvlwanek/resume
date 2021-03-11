import * as React from "react"

import { Grid, Typography, Link } from "@material-ui/core"

import getCurrentPath from "../utils/getCurrentPath"

const NavBarItem = props => {
  const path = getCurrentPath()
  return (
    <Grid item>
      <Link href={path + "#" + props.text.toLowerCase()}>
        <Typography className="nav-text">{props.text}</Typography>
      </Link>
    </Grid>
  )
}

export default NavBarItem
