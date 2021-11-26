import * as React from "react"
import { Box, Collapse, ListItemButton, Stack, Typography } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import useToggle from "../../hooks/useToggle"

interface ExpandableCardProps {
  image?: string
  title?: string
  subtitle1?: string
  subtitle2?: string
  subtitle3?: string
  details?: string[]
  DetailsComponent?: any
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  image,
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  details,
  DetailsComponent,
}) => {
  const imageSize = 56
  const margin = 3
  const [open, toggleOpen] = useToggle()
  return (
    <>
      <ListItemButton
        sx={{ justifyContent: "space-between", pl: 2, pt: 2, pb: 2 }}
        onClick={toggleOpen}
      >
        <Stack direction="row">
          <Box
            sx={{
              backgroundImage: `url(${image})`,
              height: imageSize,
              width: imageSize,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              flexShrink: 0,
              mt: 1,
            }}
          />
          <Box ml={margin}>
            <Typography variant="h6" sx={{ display: "inline" }}>
              {title}
            </Typography>
            <Typography variant="subtitle1">{subtitle1}</Typography>
            <Typography variant="subtitle2" color="GrayText">
              {subtitle2}
            </Typography>
            <Typography variant="subtitle2" color="GrayText">
              {subtitle3}
            </Typography>
          </Box>
        </Stack>
        {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowLeftIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        {DetailsComponent}
      </Collapse>
    </>
  )
}

export default ExpandableCard
