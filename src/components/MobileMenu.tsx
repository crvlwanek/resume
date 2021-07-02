import * as React from "react"

import theme from "../theme"

import MenuMask from "./MenuMask"
import Button from "./Button"

import HamburgerIcon from "../svg/HamburgerIcon"
import CloseIcon from "../svg/CloseIcon"

interface MobileMenuProps {
  contents?: string[] | undefined
  customHover?: object
  scrollState: string
}

const styles = {
  mobileMenu: {
    backgroundColor: theme.light1,
    color: theme.dark1,
    height: "100%",
    position: "fixed" as "fixed",
    right: 0,
    top: 0,
    width: "20rem",
  },
  iconHolder: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 17px",
  },
  iconWrapper: {
    cursor: "pointer",
  },
  mobileMenuList: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "flex-end",
    marginTop: "50px",
  },
  mobileListItem: {
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    color: "inherit",
    fontSize: "2rem",
    padding: "10px",
    textDecoration: "none",
    textTransform: "capitalize" as "capitalize",
  },
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  contents,
  customHover,
  scrollState,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const handleClose = (e: any) => {
    e.stopPropagation()
    setMenuOpen(false)
  }

  return (
    <div onClick={() => setMenuOpen(true)} className="navbar__mobile">
      <HamburgerIcon
        size={50}
        fill={scrollState === "top" ? theme.light1 : theme.dark1}
      />
      {menuOpen ? (
        <MenuMask condition={menuOpen} onClick={(e: any) => handleClose(e)}>
          <div style={styles.mobileMenu}>
            <div style={styles.iconHolder}>
              <div style={styles.iconWrapper}>
                <CloseIcon
                  fill={theme.dark1}
                  hoverColor={theme.primary1}
                  size={23}
                />
              </div>
            </div>
            <ul style={styles.mobileMenuList}>
              {contents?.map(item => (
                <li key={item} style={styles.mobileListItem}>
                  <Button
                    ariaLabel={item}
                    color={theme.light1}
                    customActive={{ filter: "" }}
                    customHover={customHover}
                    customStyles={styles.link}
                    href={`#${item}`}
                    onClick={e => handleClose(e)}
                    linkStyle={{ color: "inherit" }}
                    variant="transparent"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </MenuMask>
      ) : (
        ""
      )}
    </div>
  )
}

export default MobileMenu
