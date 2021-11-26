import { SxProps } from "@mui/system/styleFunctionSx"
import { Theme } from "@mui/material/styles/createTheme"

export type SxPropsTheme = SxProps<Theme>

export interface MuiSxMixin {
  sx?: SxPropsTheme
}
