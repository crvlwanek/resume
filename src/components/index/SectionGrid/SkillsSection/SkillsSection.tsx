import { Box, Chip, ListItem, Typography } from "@mui/material"
import * as React from "react"
import { Skill, skills } from "../../../../data"
import CardList from "../../../common/CardList"
import IndexDivider from "../../../common/IndexDivider"
import GenericSection from "../GenericSection"

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
  return (
    <GenericSection name="skills">
      <CardList>
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
      </CardList>
    </GenericSection>
  )
}

export default SkillsSection
