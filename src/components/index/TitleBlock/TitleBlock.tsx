import * as React from "react"

import { Box, Typography } from "@mui/material"

import { titleBlock } from "../../../data"

import useIsMobile from "../../../hooks/useIsMobile"

import IconBar from "../../common/IconBar"

interface TitleBlockProps {}

const TitleBlock: React.FC<TitleBlockProps> = ({}) => {
  const isMobile: boolean = useIsMobile()
  return (
    <Box pl={1} pt={1} textAlign={isMobile ? "left" : "center"}>
      <Typography variant="h1" pl="5px" sx={{ overflow: "hidden" }}>
        {titleBlock.name}
      </Typography>
      <Typography variant="h2" sx={{ overflow: "hidden", padding: "5px" }}>
        {titleBlock.jobTitle}
      </Typography>
      <IconBar color="secondary" />
    </Box>
  )
}

export default TitleBlock
