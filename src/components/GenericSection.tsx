import * as React from "react"

import theme from "../theme"

interface GenericSectionProps {
  bottom?: boolean
  name: string
  top?: boolean
}

const styles = {
  genericSection: {
    background: theme.background1,
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    maxWidth: 900,
    padding: "20 0 0",
  },
  paper: {
    background: theme.light1,
    borderRadius: "10px",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    color: theme.dark1,
    padding: "30px 15px 10px",
    width: "100%",
    textAlign: "center" as "center",
  },
  header: {
    fontFamily: theme.font1,
    fontSize: "1.8rem",
    marginLeft: "30px",
    textAlign: "left" as "left",
    textTransform: "capitalize" as "capitalize",
  },
}

const GenericSection: React.FC<GenericSectionProps> = ({
  bottom,
  children,
  name,
  top,
}) => {
  const sectionWrapperStyles = {
    ...styles.genericSection,
    ...{ paddingTop: top ? "30px" : "15px" },
    ...{ paddingBottom: bottom ? "30px" : "15px" },
  }
  return (
    <section id={name} style={sectionWrapperStyles}>
      <div style={styles.container}>
        <div style={styles.paper}>
          <h2 style={styles.header}>{name}</h2>
          {children}
        </div>
      </div>
    </section>
  )
}

export default GenericSection
