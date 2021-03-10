import * as React from "react"

import { Link, Typography, Box } from "@material-ui/core"

const OnlineCourse = props => {
  return (
    <Box className="course-box">
      <Typography variant="body1">
        <Link target="_blank" href={props.link}>
          {props.courseName}
        </Link>{" "}
        | {props.school}
      </Typography>
      <Typography variant="body1">
        {props.completed}
        {props.credential ? (
          <>
            {" - "}
            <Link target="_blank" href={props.credential}>
              Credential
            </Link>
          </>
        ) : (
          ""
        )}
      </Typography>
    </Box>
  )
}

export default OnlineCourse
