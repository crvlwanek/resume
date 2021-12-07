import { SxProps } from "@mui/system/styleFunctionSx"
import { Theme } from "@mui/material/styles/createTheme"
import { TypographyPropsVariantOverrides } from "@mui/material/Typography"
import { OverridableStringUnion } from "@mui/types/index"
import { Variant } from "@mui/material/styles/createTypography"

export type TypographyVariant = OverridableStringUnion<
  Variant | "inherit",
  TypographyPropsVariantOverrides
>

export type SxPropsTheme = SxProps<Theme>

export interface MuiSxMixin {
  sx?: SxPropsTheme
}
