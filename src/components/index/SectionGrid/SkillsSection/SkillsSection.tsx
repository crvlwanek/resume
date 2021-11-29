import * as React from "react"
import { Box, Chip, List, ListItem, Typography } from "@mui/material"
import { Skill, skills } from "../../../../data"
import IndexDivider from "../../../common/IndexDivider"
import GenericSection from "../GenericSection"

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
  return (
    <GenericSection name="skills">
      <List disablePadding>
        {skills.map((skill: Skill, index) => (
          <div key={skill.name}>
            <IndexDivider index={index} />
            <ListItem sx={{ flexDirection: "column" }}>
              <Typography variant="h6" sx={{ alignSelf: "flex-start" }}>
                {skill.name}
              </Typography>
              <Box maxWidth={450}>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  gap={1}
                  py={2}
                >
                  {skill.items.map(item => (
                    <Chip
                      key={item}
                      component="a"
                      target="_blank"
                      rel="noreferrer"
                      clickable
                      href={`https://github.com/crvlwanek?tab=repositories&q=${item}`}
                      label={item}
                    />
                  ))}
                </Box>
              </Box>
            </ListItem>
          </div>
        ))}
      </List>
    </GenericSection>
  )
}

export default SkillsSection
