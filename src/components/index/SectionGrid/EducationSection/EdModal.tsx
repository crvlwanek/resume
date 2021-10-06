import {
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Paper,
  Typography,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import VerifiedIcon from "@mui/icons-material/Verified"
import * as React from "react"
import { CourseCategory } from "../../../../data"
import useToggle from "../../../../hooks/useToggle"
import {
  onPrimary,
  onSurface,
  primary,
  primaryHover,
  studyImage,
  surface,
} from "../../../../theme"
import HeroSplash from "../../../common/HeroSplash"

interface EdModalProps {
  details: any
}

const EdModal: React.FC<EdModalProps> = ({ details }) => {
  const [open, toggleOpen, setOpenTrue, setOpenFalse] = useToggle()
  return (
    <>
      <Button onClick={setOpenTrue} sx={{ mb: 2 }}>
        What's this?
      </Button>
      {open ? (
        <IconButton
          onClick={setOpenFalse}
          sx={{
            position: "fixed",
            top: "10px",
            right: "10px",
            color: onSurface,
            backgroundColor: surface,
            zIndex: 2000,
            "&:hover": {
              backgroundColor: primary,
              color: onPrimary,
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
      <Modal open={open} onClose={setOpenFalse}>
        <Paper
          sx={{
            height: "93%",
            inset: 0,
            margin: "auto",
            overflowY: "scroll",
            width: "min(600px, 93%)",
            position: "fixed",
          }}
        >
          <HeroSplash src={studyImage} height="225px">
            <Typography
              variant="h1"
              sx={{
                color: onPrimary,
                fontSize: "3rem",
                fontWeight: 600,
                textAlign: "center",
                padding: 2,
                overflow: "hidden",
              }}
            >
              Open Source Computer Science
            </Typography>
          </HeroSplash>
          <Typography variant="body1" sx={{ textAlign: "center", padding: 2 }}>
            A collection of online courses by reputable universities intended to
            satisfy the requirements of a traditional Bachelor's degree in
            Computer Science.
          </Typography>
          <Box paddingX={2}>
            {details?.map((category: CourseCategory) => (
              <>
                <Typography
                  variant="h3"
                  sx={{ paddingX: 2, overflow: "hidden" }}
                >
                  {category.name}
                </Typography>
                <List>
                  {category?.courses?.map(course => (
                    <ListItem disablePadding>
                      <IconButton
                        href={course.credential as string}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <VerifiedIcon
                          sx={{ ...primaryHover, color: onSurface }}
                        />
                      </IconButton>
                      <Link href={course.link} sx={{ textDecoration: "none" }}>
                        {course.courseName}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </>
            ))}
          </Box>
        </Paper>
      </Modal>
    </>
  )
}

export default EdModal
