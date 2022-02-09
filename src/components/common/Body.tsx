import * as React from "react"
import { ThemeProvider } from "@emotion/react"
import {
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  Paper,
  useMediaQuery,
} from "@mui/material"
import { getDesignTokens } from "../../theme"
import { MuiSxMixin } from "../../interfaces/mui"

export const ColorModeContext = React.createContext({
  toggle: () => {},
})

interface BodyProps extends MuiSxMixin {}

const Body: React.FC<BodyProps> = ({ children, sx }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  )
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

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode, prefersDarkMode]
  )

  React.useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light")
  }, [prefersDarkMode])

  return (
    <CssBaseline>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Paper sx={{ borderRadius: 0, ...sx }}>{children}</Paper>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CssBaseline>
  )
}

export default Body
