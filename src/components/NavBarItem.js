import { Grid, Typography, Link } from "@material-ui/core"
import * as React from "react"

const NavBarItem = props => {
  return (
    <Grid item>
      <Link href={window.location.pathname + "#" + props.text.toLowerCase()}>
        <Typography className="nav-text">{props.text}</Typography>
      </Link>
    </Grid>
  )
}

export default NavBarItem
