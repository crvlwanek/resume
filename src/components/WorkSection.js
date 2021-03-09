import { Box, Container, Paper, Typography, Grid } from "@material-ui/core"
import React from "react"

const styles = {
  header: {
    textAlign: "left",
    marginLeft: "30px",
  },
  container: {
    padding: "20px 0 0",
  },
  paper: {
    textAlign: "center",
    padding: "30px 10px 10px",
  },
  spasd: {
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

const startDate = new Date("August 2020")
const currentDate = new Date()
var months = (currentDate.getFullYear() - startDate.getFullYear()) * 12
months -= startDate.getMonth()
months += currentDate.getMonth()

export const WorkSection = () => {
  return (
    <section className="work-section" id="work">
      <Container style={styles.container} maxWidth="md" alignItems="center">
        <Paper style={styles.paper}>
          <Typography style={styles.header} variant="h5">
            Work Experience
          </Typography>
          <Grid container direction="row">
            <Grid item>
              <Box style={styles.spasd} className="spasd"></Box>
            </Grid>
            <Grid style={styles.detailBox} item>
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
                style={{ paddingBottom: "10px" }}
              >
                Sun Prairie, Wisconsin
              </Typography>
              <Typography variant="body1">
                • Worked with a team to design and develop new and innovative
                curriculum for distance learning
              </Typography>
              <Typography variant="body1">
                • Automated many daily tasks such as taking attendance and
                grading assignments with Python
              </Typography>
              <Typography variant="body1">
                • Built a fullstack web application in order to host student
                music portfolios
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </section>
  )
}
