import * as React from "react"

interface HamburgerProps {
  fill: string
}

export const Hamburger: React.FC<HamburgerProps> = ({ fill }) => {
  return (
    <svg fill={fill} focusable="false" viewBox="0 0 24 24">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  )
}
