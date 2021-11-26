import * as React from "react"
import { Divider } from "@mui/material"

interface IndexDividerProps {
  index?: number
}

const IndexDivider: React.FC<IndexDividerProps> = ({ index }) => {
  return <Divider variant={index ? "inset" : "fullWidth"} />
}

export default IndexDivider
