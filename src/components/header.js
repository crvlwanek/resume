import * as React from "react"
import { AppBar, Container, Grid, makeStyles, Toolbar } from "@material-ui/core"
import { NavBarItem } from "./NavBarItem"

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  text: {
    color: "white",
    fontSize: "1.3rem",
    filter: `drop-shadow(2px 2px 2px black)`,
  },
  marginBox: {
    display: "flex",
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <header>
      <AppBar
        className="navbar"
        color="transparent"
        elevation={0}
        position="absolute"
      >
        <Toolbar>
          <Container maxWidth="md" className={classes.marginBox}>
            {/* <Link className={classes.link} to="/">
              <Typography className={classes.text}>Home</Typography>
            </Link> */}

            <Grid
              container
              direction="row"
              spacing={2}
              alignItems="center"
              justify="flex-end"
            >
              <NavBarItem text="Work" />
              <NavBarItem text="Education" />
              <NavBarItem text="Skills" />
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
