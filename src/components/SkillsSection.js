import * as React from "react"

import { Container, Typography, Chip, Box } from "@material-ui/core"

import GenericSection from "./GenericSection"

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

const SkillsSection = () => {
  return (
    <GenericSection name="skills" bottom>
      <Container alignItems="center">
        <Typography className="subheading" variant="h6">
          Programming Languages
        </Typography>
        <Box className="chip-box">
          {programmingLanguages.map(lang => (
            <Chip key={lang} label={lang} color="primary" className="chip" />
          ))}
        </Box>
        <Typography className="subheading" variant="h6">
          Frameworks
        </Typography>
        <Box className="chip-box">
          {frameworks.map(f => (
            <Chip key={f} label={f} color="primary" className="chip" />
          ))}
        </Box>
        <Typography className="subheading" variant="h6">
          Database Technologies
        </Typography>
        <Box className="chip-box">
          {databases.map(d => (
            <Chip key={d} label={d} color="primary" className="chip" />
          ))}
        </Box>
      </Container>
    </GenericSection>
  )
}

export default SkillsSection
