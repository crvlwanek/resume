import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  Modal,
  Button,
} from "@material-ui/core"
import React from "react"
import { EdModal } from "./EdModal"

const styles = {
  header: {
    textAlign: "left",
    marginLeft: "30px",
  },
  container: {
    padding: "20px 0",
  },
  paper: {
    textAlign: "center",
    padding: "30px 10px 10px",
  },
  modal: {
    margin: "auto",
    overflow: "scroll",
  },
  uwm: {
    height: "100px",
    width: "100px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    margin: "25px 25px 0",
  },
  detailBox: {
    margin: "25px",
    textAlign: "left",
  },
}

const startDate = new Date("October 2020")
const currentDate = new Date()
var months = (currentDate.getFullYear() - startDate.getFullYear()) * 12
months -= startDate.getMonth()
months += currentDate.getMonth()

export const EducationSection = () => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <section className="education-section" id="education">
      <Container style={styles.container} maxWidth="md" alignItems="center">
        <Paper style={styles.paper}>
          <Typography variant="h5" style={styles.header}>
            Education
          </Typography>
          <Grid container direction="row" justify="flex-start">
            <Grid xs={12} sm={2} item>
              <Box style={styles.uwm} className="coursera"></Box>
            </Grid>
            <Grid xs={12} sm={9} style={styles.detailBox} item>
              <Grid direction="row" container alignItems="center" spacing={3}>
                <Grid item>
                  <Typography variant="h6">Open Source</Typography>
                </Grid>
                <Grid item>
                  <Button color="primary" onClick={handleOpen}>
                    What's this?
                  </Button>
                  <Modal
                    style={styles.modal}
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
                style={{ paddingBottom: "10px" }}
              >
                Online
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="flex-start">
            <Grid xs={12} sm={2} item>
              <Box style={styles.uwm} className="uwm"></Box>
            </Grid>
            <Grid xs={12} sm={9} style={styles.detailBox} item>
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
                style={{ paddingBottom: "10px" }}
              >
                Milwaukee, Wisconsin
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </section>
  )
}
