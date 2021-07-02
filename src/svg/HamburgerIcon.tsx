import * as React from "react"

import theme from "../theme"

interface HamburgerProps {
  fill: string
  size: number
}

const Hamburger: React.FC<HamburgerProps> = ({ fill, size }) => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = React.useState(false)

  const hoverColor = theme.primary1

  return (
    <svg
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      onMouseDown={() => {
        setActive(true)
      }}
      onMouseUp={() => {
        setActive(false)
      }}
      style={{ cursor: "pointer", width: size, height: size }}
      fill={hover ? hoverColor : fill}
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  )
}

export default Hamburger
