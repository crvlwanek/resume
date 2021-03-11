import * as React from "react"

import { Container, Typography, Chip, Box } from "@material-ui/core"

import GenericSection from "./GenericSection"
import siteData from "../site-data.json"

const SkillsSection = () => {
  return (
    <GenericSection name="skills" bottom>
      <Container alignItems="center">
        {siteData.skills.map(skill => (
          <>
            <Typography key={skill.name} className="subheading" variant="h6">
              {skill.name}
            </Typography>
            <Box className="chip-box">
              {skill.items.map(item => (
                <Chip
                  key={item}
                  label={item}
                  className="chip"
                  component="a"
                  href={`https://github.com/crvlwanek?tab=repositories&q=${item}&type=&language=`}
                  clickable
                />
              ))}
            </Box>
          </>
        ))}
      </Container>
    </GenericSection>
  )
}

export default SkillsSection
