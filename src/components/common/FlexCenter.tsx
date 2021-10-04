import * as React from "react"
import { MuiSxMixin } from "../../interfaces/mui"
import FlexAlignCenter from "./FlexAlignCenter"

interface FlexCenterProps extends MuiSxMixin {}

const FlexCenter: React.FC<FlexCenterProps> = ({ children, sx }) => {
  return (
    <FlexAlignCenter justify="center" sx={sx}>
      {children}
    </FlexAlignCenter>
  )
}

export default FlexCenter
