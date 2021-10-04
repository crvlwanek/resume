import * as React from "react"

import useIsMobile from "../../../hooks/useIsMobile"

import FlexCenter from "../../common/FlexCenter"

interface AvatarBoxProps {}

const AvatarBox: React.FC<AvatarBoxProps> = ({ children }) => {
  const isMobile: boolean = useIsMobile()
  const flexDirection = isMobile ? "row" : "column"
  const padding = 4
  return <FlexCenter sx={{ flexDirection, padding }}>{children}</FlexCenter>
}

export default AvatarBox
