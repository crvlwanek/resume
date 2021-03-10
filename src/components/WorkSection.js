import * as React from "react"

import { Box, Typography, Grid } from "@material-ui/core"

import GenericSection from "./GenericSection"

const startDate = new Date("August 2020")
const currentDate = new Date()
var months = (currentDate.getFullYear() - startDate.getFullYear()) * 12
months -= startDate.getMonth()
months += currentDate.getMonth()

const WorkSection = () => {
  return (
    <GenericSection name="work experience">
      <Grid container direction="row">
        <Grid item>
          <Box className="spasd logo-img"></Box>
        </Grid>
        <Grid className="detail-box" item>
          <Typography variant="h6">Digital Music Teacher</Typography>
          <Typography variant="subtitle1">
            Sun Prairie Area School District
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Aug 2020 -- Present |{" "}
            {months < 12 ? months + " months" : months / 12 + " year(s)"}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            className="bottom-line"
          >
            Sun Prairie, Wisconsin
          </Typography>
          <Typography variant="body1">
            • Worked with a team to design and develop new and innovative
            curriculum for distance learning
          </Typography>
          <Typography variant="body1">
            • Automated many daily tasks such as taking attendance and grading
            assignments with Python
          </Typography>
          <Typography variant="body1">
            • Built a fullstack web application in order to host student music
            portfolios
          </Typography>
        </Grid>
      </Grid>
    </GenericSection>
  )
}

export default WorkSection
