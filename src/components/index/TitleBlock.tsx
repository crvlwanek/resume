import { Box, Typography } from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"
import * as React from "react"
import { titleBlock } from "../../data"
import { SxPropsTheme } from "../../interfaces/mui"

interface TitleBlockProps {
  headerVariant?: Variant
  headerSx?: SxPropsTheme
  subheaderVariant?: Variant
  subheaderSx?: SxPropsTheme
  titleRef?: React.RefObject<HTMLSpanElement>
  wrapperSx?: SxPropsTheme
}

const TitleBlock: React.FC<TitleBlockProps> = ({
  headerVariant = "h4",
  headerSx = {},
  subheaderVariant = "h6",
  subheaderSx = {},
  titleRef,
  wrapperSx = {},
}) => {
  return (
    <Box sx={wrapperSx}>
      <Typography ref={titleRef} variant={headerVariant} sx={headerSx}>
        {titleBlock.name}
      </Typography>
      <Typography variant={subheaderVariant} sx={subheaderSx}>
        {titleBlock.jobTitle}
      </Typography>
    </Box>
  )
}

export default TitleBlock
