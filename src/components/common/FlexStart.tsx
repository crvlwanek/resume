import * as React from "react"
import { MuiSxMixin } from "../../interfaces/mui"
import FlexAlignCenter from "./FlexAlignCenter"

interface FlexStartProps extends MuiSxMixin {}

const FlexStart: React.FC<FlexStartProps> = ({ children, sx }) => {
  return (
    <FlexAlignCenter justify="flex-start" sx={sx}>
      {children}
    </FlexAlignCenter>
  )
}

export default FlexStart
