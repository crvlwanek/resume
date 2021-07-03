import * as React from "react"

import theme from "../theme"
import IconBar from "./IconBar"

interface FooterProps {}

const styles = {
  container: {
    background: theme.background2,
    display: "flex",
    flexDirection: "column" as "column",
    padding: "50px",
    placeItems: "center",
  },
  text: {
    color: theme.dark1,
    fontFamily: theme.font2,
    padding: "5px",
  },
  link: {
    color: theme.dark1,
    textDecoration: "none",
  },
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer style={styles.container}>
      <IconBar />
      <p style={styles.text}>
        Chris VL-Wanek &copy; {new Date().getFullYear()}
      </p>
      <p style={styles.text}>
        <a style={styles.link}>View the GitHub Repo</a>
      </p>
      <p style={styles.text}>
        <a style={styles.link} href="#">
          Back to top
        </a>
      </p>
    </footer>
  )
}

export default Footer
