import * as React from "react"

import theme from "../theme"

import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

interface NavBarProps {
  customHover?: object
  leftMenu?: string[] | undefined
  rightMenu?: string[] | undefined
  siteTitle?: string | undefined
}

const styles = {
  holder: {
    color: theme.light1,
    position: "fixed" as "fixed",
    width: "100%",
    transition: "0.2s cubic-bezier(0.25, 0.1, 0.6, 0.54)",
    zIndex: 1,
  },
  navTop: {
    backgroundColor: "transparent",
    borderColor: theme.light1,
  },
  navScroll: {
    backgroundColor: theme.light1,
    borderColor: theme.dark1,
    boxShadow: "1px 1px 3px #888888",
    color: theme.dark1,
  },
  wrapper: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    maxWidth: "1330px",
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
}

const NavBar: React.FC<NavBarProps> = ({
  customHover,
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
        <DesktopMenu type="left" contents={leftMenu} />
        <a style={styles.logoLink} href="/">
          <h1 className="navbar__logo">{siteTitle}</h1>
        </a>
        <DesktopMenu
          type="right"
          contents={rightMenu}
          customHover={customHover}
        />
        <MobileMenu
          contents={rightMenu}
          customHover={customHover}
          scrollState={scrollState}
        />
      </div>
    </div>
  )
}

export default NavBar
