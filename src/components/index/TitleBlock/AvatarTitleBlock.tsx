import * as React from "react"
import { Box, Typography } from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"
import { titleBlock } from "../../../data"
import { MuiSxMixin, SxPropsTheme } from "../../../interfaces/mui"
import MyAvatar from "../AvatarBox/MyAvatar"

interface AvatarTitleBlockProps extends MuiSxMixin {
  boxSx?: SxPropsTheme
  avatarSize?: string
  avatarSx?: SxPropsTheme
  headerVariant?: Variant
  headerSx?: SxPropsTheme
  subheaderVariant?: Variant
  subheaderSx?: SxPropsTheme
}

const AvatarTitleBlock: React.FC<AvatarTitleBlockProps> = ({
  boxSx,
  avatarSize = "6rem",
  avatarSx = {},
  headerVariant = "h4",
  headerSx = {},
  subheaderVariant = "h6",
  subheaderSx = {},
}) => {
  return (
    <Box sx={boxSx}>
      <MyAvatar size={avatarSize} sx={avatarSx} />
      <Typography variant={headerVariant} sx={headerSx}>
        {titleBlock.name}
      </Typography>
      <Typography variant={subheaderVariant} sx={subheaderSx}>
        {titleBlock.jobTitle}
      </Typography>
    </Box>
  )
}

export default AvatarTitleBlock
