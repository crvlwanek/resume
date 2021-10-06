import * as React from "react"
import { Box, Chip, Divider, List, ListItem, Typography } from "@mui/material"
import { Skill, skills } from "../../../../data"
import GenericSection from "../GenericSection"
import useIsMobile from "../../../../hooks/useIsMobile"

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
  const isMobile: boolean = useIsMobile()
  return (
    <GenericSection name="skills">
      <List disablePadding>
        {skills.map((skill: Skill, index) => (
          <>
            <Divider variant={index ? "inset" : "fullWidth"} />
            <ListItem sx={{ flexDirection: "column" }}>
              <Typography variant="h6" sx={{ alignSelf: "flex-start" }}>
                {skill.name}
              </Typography>
              <Box maxWidth={450}>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent={isMobile ? "center" : "flex-start"}
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
