import * as React from "react"

import theme from "../theme"

interface ChipProps {
  color: string
}

const Chip: React.FC<ChipProps> = ({ children, color }) => {
  const style = {
    background: color,
    color: theme.light1,
    border: `1px solid ${theme.dark1}`,
    borderRadius: "50%",
  }
  return <div style={style}>{children}</div>
}

export default Chip
