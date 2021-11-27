import * as React from "react"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import theme from "../../theme"

interface PageWrapperProps {}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CssBaseline>
  )
}

export default PageWrapper
