import * as React from "react"

import { Box, Typography } from "@mui/material"

import { titleBlock } from "../../../data"

import IconBar from "../../common/IconBar"
import useIsMobile from "../../../hooks/useIsMobile"

interface TitleBlockProps {}

const TitleBlock: React.FC<TitleBlockProps> = ({}) => {
  const isMobile: boolean = useIsMobile()
  const iconBar__color = isMobile ? "dark" : "imageOverlay"
  return (
    <Box textAlign="center">
      <Typography variant="h4">{titleBlock.name}</Typography>
      <Typography variant="h6" sx={{ fontWeight: 200 }}>
        {titleBlock.jobTitle}
      </Typography>
      <IconBar color={iconBar__color} />
    </Box>
  )
}

export default TitleBlock
