import * as React from "react"
import { imageOverlay, onSurface } from "../../theme"
import useIsMobile from "../../hooks/useIsMobile"
import { Stack } from "@mui/material"

interface MainTitleBoxProps {}

const MainTitleBox: React.FC<MainTitleBoxProps> = ({ children }) => {
  const isMobile: boolean = useIsMobile()
  const color = isMobile ? onSurface : imageOverlay
  const margin = isMobile ? "32px 0 0" : "auto"
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "100%",
        margin,
        color,
        p: 1,
      }}
    >
      {children}
    </Stack>
  )
}

export default MainTitleBox
