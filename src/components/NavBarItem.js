import { Grid, makeStyles, Typography, Link } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  text: {
    color: "white",
    fontSize: "1.3rem",
    filter: `drop-shadow(2px 2px 2px black)`,
  },
})

export const NavBarItem = props => {
  const classes = useStyles()
  return (
    <Grid item>
      <Link href={"/#" + props.text.toLowerCase()}>
        <Typography className={classes.text}>{props.text}</Typography>
      </Link>
    </Grid>
  )
}
