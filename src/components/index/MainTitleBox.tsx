import { Paper, Stack } from "@mui/material"
import * as React from "react"
import useIsMobile from "../../hooks/useIsMobile"

interface MainTitleBoxProps {}

const MainTitleBox: React.FC<MainTitleBoxProps> = ({ children }) => {
  const isMobile: boolean = useIsMobile()
  const margin = isMobile ? "32px 0 0" : "auto"
  return (
    <Paper elevation={3} sx={{ height: "100%", borderRadius: 0 }}>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "inherit",
          margin,
          color: isMobile ? "text.primary" : "white",
          p: 1,
          m: "auto",
        }}
      >
        {children}
      </Stack>
    </Paper>
  )
}

export default MainTitleBox
