import { Box, Typography } from "@mui/material"
import * as React from "react"
import EdModal from "./EducationSection/EdModal"

interface ImageBoxDetailsProps {
  title: string
  subtitle: string
  startDate: string
  endDate: string
  location: string
  details?: any
}

const ImageBoxDetails: React.FC<ImageBoxDetailsProps> = ({
  children,
  title,
  subtitle,
  startDate,
  endDate,
  location,
  details,
}) => {
  return (
    <Box p={2}>
      <Typography variant="h4" sx={{ display: "inline" }}>
        {title}
      </Typography>
      {details ? <EdModal details={details} /> : null}
      <Typography variant="h5">{subtitle}</Typography>
      <Typography variant="body2">{`${startDate} -- ${endDate}`}</Typography>
      <Typography variant="body2">{location}</Typography>
      {children}
    </Box>
  )
}

export default ImageBoxDetails
