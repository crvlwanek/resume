import * as React from "react"
import { ThemeProvider } from "@emotion/react"
import { createTheme, CssBaseline, PaletteMode } from "@mui/material"
import { getDesignTokens } from "../../theme"

export const ColorModeContext = React.createContext({
  toggle: () => {},
})

interface PageWrapperProps {}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [mode, setMode] = React.useState<PaletteMode>("light")
  const colorMode = React.useMemo(
    () => ({
      toggle: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        )
      },
    }),
    []
  )

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <CssBaseline>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ColorModeContext.Provider>
    </CssBaseline>
  )
}

export default PageWrapper
