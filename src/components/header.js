import * as React from "react"

import { AppBar, Container, Grid, Toolbar } from "@material-ui/core"

import NavBarItem from "./NavBarItem"

const Header = () => {
  return (
    <header>
      <AppBar
        className="navbar"
        color="transparent"
        elevation={0}
        position="absolute"
      >
        <Toolbar>
          <Container maxWidth="md" className="nav-margin">
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
