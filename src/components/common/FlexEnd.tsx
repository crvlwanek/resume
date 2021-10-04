import * as React from "react"
import { MuiSxMixin } from "../../interfaces/mui"
import FlexAlignCenter from "./FlexAlignCenter"

interface FlexEndProps extends MuiSxMixin {}

const FlexEnd: React.FC<FlexEndProps> = ({ children, sx }) => {
  return (
    <FlexAlignCenter justify="flex-end" sx={sx}>
      {children}
    </FlexAlignCenter>
  )
}

export default FlexEnd
