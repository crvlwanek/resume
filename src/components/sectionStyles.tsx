import * as React from "react"

import theme from "../theme"

const styles = {
  row: {
    alignItems: "flex-start",
    display: "flex",
  },
  logo: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100px",
    margin: "25px 25px 0",
    padding: "5px",
    width: "100px",
  },
  detailBox: {
    fontFamily: theme.font2,
    margin: "20px",
    textAlign: "left" as "left",
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: 500,
    padding: "3px 0",
  },
  subtitle: {
    fontWeight: 400,
    padding: "7px 0",
  },
  detailText: {
    color: theme.textSecondary,
    padding: "2px 0",
  },
  list: {
    padding: "15px 0",
    lineHeight: "1.5",
  },
}

export default styles
