import { Link, Typography, Box } from "@material-ui/core"
import React from "react"

const styles = {
  box: {
    padding: "4px 0",
  },
}

export const OnlineCourse = props => {
  return (
    <Box style={styles.box}>
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
