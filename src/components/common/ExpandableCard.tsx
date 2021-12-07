import * as React from "react"
import {
  Box,
  Collapse,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import useToggle from "../../hooks/useToggle"
import { MuiSxMixin, TypographyVariant } from "../../interfaces/mui"

interface ExpandableCardProps extends MuiSxMixin {
  image?: string
  title?: string
  titleVariant?: TypographyVariant
  subtitle1?: string
  subtitle2?: string
  subtitle3?: string
  content?: any
  elevation?: number
  paperbgcolor?: string
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  image,
  title,
  titleVariant = "h6",
  subtitle1,
  subtitle2,
  subtitle3,
  content,
  sx,
  elevation = 0,
  paperbgcolor = "transparent",
}) => {
  const imageSize = 56
  const margin = 3
  const [open, toggleOpen] = useToggle()
  const Image = image ? (
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
  ) : null
  const Title = title ? (
    <Typography variant={titleVariant} sx={{ display: "inline" }}>
      {title}
    </Typography>
  ) : null
  const Subtitle1 = subtitle1 ? (
    <Typography variant="subtitle1">{subtitle1}</Typography>
  ) : null
  const Subtitle2 = subtitle2 ? (
    <Typography variant="subtitle2">{subtitle2}</Typography>
  ) : null
  const Subtitle3 = subtitle3 ? (
    <Typography variant="subtitle2">{subtitle3}</Typography>
  ) : null
  return (
    <>
      <Paper
        elevation={elevation}
        sx={{ borderRadius: 0, bgcolor: paperbgcolor }}
      >
        <ListItemButton
          sx={{ justifyContent: "space-between", pl: 2, pt: 2, pb: 2, ...sx }}
          onClick={toggleOpen}
        >
          <Stack direction="row">
            {Image}
            <Box ml={margin}>
              {Title}
              {Subtitle1}
              {Subtitle2}
              {Subtitle3}
            </Box>
          </Stack>
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowLeftIcon />}
        </ListItemButton>
      </Paper>
      <Collapse in={open} timeout="auto">
        {content}
      </Collapse>
    </>
  )
}

export default ExpandableCard
