import * as React from "react"

import { Typography, Container, Link } from "@material-ui/core"

import IconBar from "./IconBar"

const Footer = () => {
  return (
    <footer>
      <Container className="footer-container">
        <IconBar />
        <Typography className="footer-text" variant="body1">
          Chris VL-Wanek © {new Date().getFullYear()}
        </Typography>
        <Link href={window.location.pathname + "#"}>
          <Typography className="footer-text" variant="body1">
            Back to top
          </Typography>
        </Link>
      </Container>
    </footer>
  )
}

export default Footer
