import * as React from "react"

import theme from "../theme"

import Button from "./Button"

interface DesktopMenuProps {
  contents?: string[] | undefined
  customHover?: object
  type: "left" | "right"
}

const styles = {
  menu: {
    width: "33.33%",
  },
  list: {
    listStyle: "none",
    listStyleImage: "none",
    margin: 0,
    padding: 0,
  },
  leftList: {
    justifyContent: "flex-start",
  },
  rightList: {
    justifyContent: "flex-end",
  },
  listItem: {
    display: "inline-block",
  },
  listLink: {
    backgroundColor: "transparent",
    border: "1px solid transparent",
    color: "inherit",
    fontFamily: '"Roboto", sans-serif',
    fontSize: "0.9rem",
    margin: "0 15px",
    outline: 0,
    paddingTop: "10px",
    paddingBottom: "10px",
    textTransform: "uppercase" as "uppercase",
    transition: "border-color 0.4s ease",
    whiteSpace: "nowrap" as "nowrap",
  },
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  contents,
  customHover,
  type,
}) => {
  return (
    <nav style={styles.menu}>
      <ul
        style={{
          ...styles.list,
          ...(type === "left" ? styles.leftList : styles.rightList),
        }}
        className={`navbar__${type}-menu`}
      >
        {contents?.map(item => (
          <li key={item} style={styles.listItem}>
            <Button
              ariaLabel={item}
              color={theme.light1}
              customHover={customHover}
              customStyles={styles.listLink}
              href={`#${item}`}
              linkStyle={{ color: "inherit" }}
              variant="transparent"
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopMenu
