import { Container, Paper, Typography, Chip, Box } from "@material-ui/core"
import React from "react"

const styles = {
  header: {
    textAlign: "left",
    marginLeft: "30px",
  },
  subheading: {
    margin: "20px 0 0",
  },
  box: {
    margin: "10px",
  },
  container: {
    padding: "20px 0",
  },
  paper: {
    textAlign: "center",
    padding: "30px 10px 20px",
  },
  chip: {
    margin: "5px",
  },
}

const programmingLanguages = [
  "Python",
  "C++",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "JSON",
]

const frameworks = [
  "Django REST Framework",
  "React.js",
  "Node.js",
  "Redux.js",
  "Bootstrap",
  "Material-UI",
  "Next.js",
  "Chakra UI",
  "Gatsby",
]

const databases = ["PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "ORMs"]

export const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <Container style={styles.container} maxWidth="md" alignItems="center">
        <Paper style={styles.paper}>
          <Typography variant="h5" style={styles.header}>
            Skills
          </Typography>
          <Container alignItems="center">
            <Typography style={styles.subheading} variant="h6">
              Programming Languages
            </Typography>
            <Box style={styles.box}>
              {programmingLanguages.map(lang => (
                <Chip label={lang} color="primary" style={styles.chip} />
              ))}
            </Box>
            <Typography style={styles.subheading} variant="h6">
              Frameworks
            </Typography>
            <Box style={styles.box}>
              {frameworks.map(f => (
                <Chip label={f} color="primary" style={styles.chip} />
              ))}
            </Box>
            <Typography style={styles.subheading} variant="h6">
              Database Technologies
            </Typography>
            <Box style={styles.box}>
              {databases.map(d => (
                <Chip label={d} color="primary" style={styles.chip} />
              ))}
            </Box>
          </Container>
        </Paper>
      </Container>
    </section>
  )
}
