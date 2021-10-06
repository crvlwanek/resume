import { createTheme } from "@mui/material"

const colors = {
  lightest: "#f6f5f5",
  darkest: "#1b1717",
  primary: "#00adb5",
  surface: "#f6f5f5",
  background: "#dddddd",
}

export const primary = colors.primary
export const onPrimary = colors.lightest

export const surface = colors.lightest
export const onSurface = colors.darkest

export const secondary = "#f6f5f5"
export const onSecondary = "#1b1717"

export const background = colors.background
export const onBackground = colors.darkest

export const imageOverlay = colors.lightest

// TODO: Find another solution
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
    surface?: PaletteColorOptions
    imageOverlay?: PaletteColorOptions
    // TODO: remove
    dark?: PaletteColorOptions
  }
}

export type ThemeColorOverride = "surface" | "imageOverlay" | "dark"

export type ThemeColor =
  | "inherit"
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined
  | ThemeColorOverride

export type AppBarColor =
  | "default"
  | "inherit"
  | "primary"
  | "secondary"
  | "transparent"
  | string
  | ThemeColorOverride

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: onPrimary,
    },
    surface: {
      main: surface,
      contrastText: onSurface,
    },
    background: {
      default: background,
    },
    imageOverlay: {
      main: imageOverlay,
    },
    // TODO: find a better solution
    dark: {
      main: onSecondary,
    },
  },
  typography: {
    h1: {
      fontFamily: titleFont,
      fontWeight: 300,
      fontSize: "5.125rem",
      letterSpacing: "-0.094rem",
    },
    h2: {
      fontFamily: titleFont,
      fontWeight: 300,
      fontSize: "3.188rem",
      letterSpacing: "0.031rem",
    },
    h3: {
      fontFamily: titleFont,
      fontWeight: 400,
      fontSize: "2.563rem",
      letterSpacing: "0rem",
    },
    h4: {
      fontFamily: titleFont,
      fontWeight: 400,
      fontSize: "1.813rem",
      letterSpacing: "0.016rem",
    },
    h5: {
      fontFamily: titleFont,
      fontWeight: 400,
      fontSize: "1.313rem",
      letterSpacing: "0rem",
    },
    h6: {
      fontFamily: titleFont,
      fontWeight: 500,
      fontSize: "1.063rem",
      letterSpacing: "0.009rem",
    },
    subtitle1: {
      fontFamily: titleFont,
      fontWeight: 400,
      fontSize: "0.875rem",
      letterSpacing: "0.009rem",
    },
    subtitle2: {
      fontFamily: titleFont,
      fontWeight: 400,
      fontSize: "0.75rem",
      letterSpacing: "0.006rem",
    },
    body1: {
      fontFamily: bodyFont,
      fontWeight: 400,
      fontSize: "1rem",
      letterSpacing: "0.031rem",
    },
    body2: {
      fontFamily: bodyFont,
      fontWeight: 400,
      fontSize: "0.875rem",
      letterSpacing: "0.016rem",
    },
    button: {
      fontFamily: bodyFont,
      fontWeight: 500,
      fontSize: "0.875rem",
      letterSpacing: "0.078rem",
    },
    caption: {
      fontFamily: bodyFont,
      fontWeight: 400,
      fontSize: "0.75rem",
      letterSpacing: "0.025rem",
    },
    overline: {
      fontFamily: bodyFont,
      fontWeight: 400,
      fontSize: "0.625rem",
      letterSpacing: "0.094rem",
    },
  },
})

export default theme
