import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material"

export const primary = "#00adb5"
export const onPrimary = "#f6f5f5"
export const secondary = "#f6f5f5"
export const onSecondary = "#1b1717"
export const backgroundColor = "#dddddd"
export const footerColor = "#bbbbbb"

export const titleFont = ["Montserrat", "sans-serif"].join(", ")
export const bodyFont = ["Roboto", "sans-serif"].join(", ")

export const primaryHover = { "&:hover": { color: primary } }

export const transition = "0.2s cubic-bezier(0.25, 0.1, 0.6, 0.54)"

export const toolbarHeight = 60

export const deskImage =
  "https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
export const studyImage =
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=773&q=80"

export const desktopMaxWidth = 800
export const logoSize = 100

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    dark?: PaletteColorOptions
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: onPrimary,
    },
    secondary: {
      main: secondary,
      contrastText: onSecondary,
    },
    dark: {
      main: onSecondary,
    },
  },
  typography: {
    h1: {
      fontFamily: titleFont,
      fontSize: "min(1.8rem, 5vw)",
      fontWeight: 400,
    },
    h2: {
      fontFamily: titleFont,
      fontSize: "min(1.1rem, 3vw)",
      fontWeight: 200,
    },
    h3: {
      fontFamily: titleFont,
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    h4: {
      fontFamily: titleFont,
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: 1.8,
    },
    h5: {
      fontFamily: bodyFont,
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    body2: {
      fontFamily: bodyFont,
      fontSize: "1rem",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
})

export default theme
