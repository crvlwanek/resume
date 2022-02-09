import { Paper, Stack } from "@mui/material"
import * as React from "react"
import useIsMobile from "../../hooks/useIsMobile"

interface MainTitleBoxProps {}

const MainTitleBox: React.FC<MainTitleBoxProps> = ({ children }) => {
  const isMobile: boolean = useIsMobile()
  const padding = isMobile ? "32px 0 0" : "auto"
  return (
    <Paper
      sx={{
        height: "100%",
        borderRadius: 0,
        padding,
        background: "transparent",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "inherit",
          p: 1,
          color: "white",
        }}
      >
        {children}
      </Stack>
    </Paper>
  )
}

export default MainTitleBox
