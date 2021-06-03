import * as React from "react"

import { Button } from "./Button"

interface NavBarProps {
  leftMenu?: string[] | undefined
  rightMenu?: string[] | undefined
  siteTitle?: string | undefined
}

const styles = {
  holder: {
    color: "white",
    position: "fixed" as "fixed",
    width: "100%",
    transition: "0.2s cubic-bezier(0.25, 0.1, 0.6, 0.54)",
    zIndex: 1,
  },
  navTop: {
    backgroundColor: "transparent",
    borderColor: "white",
  },
  navScroll: {
    backgroundColor: "white",
    borderColor: "black",
    color: "black",
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    maxWidth: "1330px",
  },
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
  logoLink: {
    color: "inherit",
    cursor: "pointer",
    textDecoration: "none",
  },
  logo: {
    color: "inherit",
    fontFamily: '"Montserrat", sans-serif',
    margin: 0,
    transition: "ease-in-out 0.2",
  },
  hamburgerMenu: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    height: "25px",
    width: "30px",
  },
}

export const NavBar: React.FC<NavBarProps> = ({
  leftMenu,
  rightMenu,
  siteTitle,
}) => {
  let listener: any = null
  const [scrollState, setScrollState] = React.useState("top")

  React.useEffect(() => {
    listener = document?.addEventListener("scroll", e => {
      var scrolled: any | null = document?.scrollingElement?.scrollTop
      if (scrolled >= 10) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document?.removeEventListener("scroll", listener)
    }
  }, [scrollState])
  return (
    <div
      style={{
        ...styles.holder,
        ...(scrollState === "top" ? styles.navTop : styles.navScroll),
      }}
    >
      <div style={styles.wrapper} className="navbar__wrapper">
        <nav style={styles.menu}>
          <ul
            style={{ ...styles.list, ...styles.leftList }}
            className="navbar__left-menu"
          >
            {leftMenu?.map(item => (
              <li key={item} style={styles.listItem}>
                <button aria-label={item} style={styles.listLink}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <a style={styles.logoLink} href="/">
          <h1 className="navbar__logo">{siteTitle}</h1>
        </a>
        <nav style={styles.menu}>
          <ul
            style={{ ...styles.list, ...styles.rightList }}
            className="navbar__right-menu"
          >
            {rightMenu?.map(item => (
              <li key={item} style={styles.listItem}>
                <Button
                  ariaLabel={item}
                  color="white"
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
        <div className="navbar__mobile">
          <span style={styles.hamburgerMenu}>
            {[0, 1, 2].map(_ => (
              <svg key={_} width="30" height="3">
                <rect
                  width="30"
                  height="3"
                  fill={scrollState === "top" ? "white" : "black"}
                />
              </svg>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}
