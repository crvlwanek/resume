import * as React from "react"
import { imageOverlay, onSurface } from "../../../theme"
import useIsMobile from "../../../hooks/useIsMobile"
import PStack from "../../common/PStack"

interface AvatarBoxProps {}

const AvatarBox: React.FC<AvatarBoxProps> = ({ children }) => {
  const isMobile: boolean = useIsMobile()
  const color = isMobile ? onSurface : imageOverlay
  const margin = isMobile ? "32px 0 0" : "auto"
  return (
    <PStack
      p={1}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "100%",
        margin,
        color,
      }}
    >
      {children}
    </PStack>
  )
}

export default AvatarBox
