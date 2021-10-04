import * as React from "react"

interface MenuMaskProps {
  onClick: React.MouseEventHandler
}

const MenuMask: React.FC<MenuMaskProps> = ({ children, onClick }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000000aa",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default MenuMask
