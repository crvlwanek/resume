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
          <>
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
                  justifyContent="center"
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
            </ListItem>
          </>
        ))}
      </List>
    </GenericSection>
  )
}

export default SkillsSection
