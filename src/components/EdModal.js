import * as React from "react"

import {
  Paper,
  Typography,
  Container,
  IconButton,
  Box,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

import OnlineCourse from "./OnlineCourse"
import siteData from "../site-data.json"

const EdModal = props => {
  return (
    <Paper className="modal-paper">
      <Box className="modal-box">
        <IconButton onClick={props.close}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" className="modal-header">
        Open Source Computer Science
      </Typography>
      <Container maxWidth="md">
        <Typography className="modal-header">
          A collection of online courses by reputable universities intended to
          satisfy the requirements of a traditional Bachelor's degree.
        </Typography>
        {siteData.education.map(category => (
          <>
            <Typography className="category" variant="h5">
              {category.name}
            </Typography>
            {category.courses.map(course => (
              <OnlineCourse
                courseName={course.courseName}
                school={course.school}
                link={course.link}
                completed={course.completed}
                credential={course.credential}
              />
            ))}
          </>
        ))}
      </Container>
    </Paper>
  )
}

export default EdModal
