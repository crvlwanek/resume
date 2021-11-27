import { Box } from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"
import * as React from "react"
import { SxPropsTheme } from "../../interfaces/mui"
import MyAvatar from "./MyAvatar"
import TitleBlock from "./TitleBlock"

interface AvatarTitleBlockProps {
  boxSx?: SxPropsTheme
  avatarSize?: string
  avatarSx?: SxPropsTheme
  headerVariant?: Variant
  headerSx?: SxPropsTheme
  subheaderVariant?: Variant
  subheaderSx?: SxPropsTheme
  titleRef?: React.RefObject<HTMLSpanElement>
}

const AvatarTitleBlock: React.FC<AvatarTitleBlockProps> = ({
  boxSx,
  avatarSize = "6rem",
  avatarSx = {},
  headerVariant = "h4",
  headerSx = {},
  subheaderVariant = "h6",
  subheaderSx = {},
  titleRef,
}) => {
  return (
    <Box sx={boxSx}>
      <MyAvatar size={avatarSize} sx={avatarSx} />
      <TitleBlock
        headerVariant={headerVariant}
        headerSx={headerSx}
        subheaderVariant={subheaderVariant}
        subheaderSx={subheaderSx}
        titleRef={titleRef}
      />
    </Box>
  )
}

export default AvatarTitleBlock
