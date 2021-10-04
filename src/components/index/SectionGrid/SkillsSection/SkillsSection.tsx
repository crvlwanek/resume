import * as React from "react"
import { Box, Chip, Stack, Typography } from "@mui/material"
import GenericSection from "../GenericSection"
import { Skill, skills } from "../../../../data"

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
  return (
    <GenericSection name="skills">
      <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
        Click on a keyword to view all of my projects that use that technology
      </Typography>
      <Stack spacing={2} p={2}>
        {skills.map((skill: Skill) => (
          <Box alignItems="center" display="flex" flexDirection="column">
            <Typography variant="h4">{skill.name}</Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              maxWidth={450}
            >
              {skill.items.map(item => (
                <Chip
                  component="a"
                  target="_blank"
                  rel="noreferrer"
                  clickable
                  href={`https://github.com/crvlwanek?tab=repositories&q=${item}`}
                  sx={{
                    margin: 1,
                  }}
                  label={item}
                  color="primary"
                />
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </GenericSection>
  )
}

export default SkillsSection
