import * as React from "react"

import { Typography, Grid, Box, Modal, Button } from "@material-ui/core"

import GenericSection from "./GenericSection"
import EdModal from "./EdModal"

const startDate = new Date("October 2020")
const currentDate = new Date()
var months = (currentDate.getFullYear() - startDate.getFullYear()) * 12
months -= startDate.getMonth()
months += currentDate.getMonth()

const EducationSection = () => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <GenericSection name="education">
      <Grid container direction="row" justify="flex-start">
        <Grid xs={12} sm={2} item>
          <Box className="coursera logo-img"></Box>
        </Grid>
        <Grid xs={12} sm={9} className="detail-box" item>
          <Grid direction="row" container alignItems="center" spacing={3}>
            <Grid item>
              <Typography variant="h6">Open Source</Typography>
            </Grid>
            <Grid item>
              <Button color="primary" onClick={handleOpen}>
                What's this?
              </Button>
              <Modal
                className="modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <EdModal close={handleClose} />
              </Modal>
            </Grid>
          </Grid>

          <Typography variant="subtitle1">
            Self-studying - Computer Science
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            October 2020 -- Present |{" "}
            {months < 12 ? months + " months" : months / 12 + " year(s)"}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            className="bottom-line"
          >
            Online
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="flex-start">
        <Grid xs={12} sm={2} item>
          <Box className="uwm logo-img"></Box>
        </Grid>
        <Grid xs={12} sm={9} className="detail-box" item>
          <Typography variant="h6">
            University of Wisconsin-Milwaukee
          </Typography>
          <Typography variant="subtitle1">
            Bachelor of Fine Arts - Music Education
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Sep 2015 -- May 2020
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            className="bottom-line"
          >
            Milwaukee, Wisconsin
          </Typography>
        </Grid>
      </Grid>
    </GenericSection>
  )
}

export default EducationSection
