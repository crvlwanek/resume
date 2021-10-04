import * as React from "react"
import { Box } from "@mui/material"
import { MuiSxMixin } from "../../interfaces/mui"

interface TestingBlockProps extends MuiSxMixin {
  color: string
}

const TestingBlock: React.FC<TestingBlockProps> = ({ color, sx }) => {
  return (
    <Box sx={{ bgcolor: color, width: "100vw", height: "100vh", ...sx }}></Box>
  )
}

export default TestingBlock
