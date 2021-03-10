import * as React from "react"

import { Container, Paper, Typography } from "@material-ui/core"

const GenericSection = props => {
  return (
    <section
      id={props.name}
      className={
        props.bottom ? "generic-section bottom-section" : "generic-section"
      }
    >
      <Container className="container" maxWidth="md" alignItems="center">
        <Paper className="paper">
          <Typography variant="h5" className="header">
            {props.name}
          </Typography>
          {props.children}
        </Paper>
      </Container>
    </section>
  )
}

export default GenericSection
