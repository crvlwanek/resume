import * as React from "react"

interface MenuMaskProps {
  condition: boolean
  onClick?: any
}

const styles = {
  menuMask: {
    background: "rgba(0, 0, 0, 0.4)",
    height: "100%",
    position: "fixed" as "fixed",
    right: 0,
    top: 0,
    width: "100%",
    zIndex: 2,
  },
}

const MenuMask: React.FC<MenuMaskProps> = ({
  children,
  condition,
  onClick,
}) => {
  return condition ? (
    <div onClick={onClick} style={styles.menuMask}>
      {children}
    </div>
  ) : (
    <></>
  )
}

export default MenuMask
