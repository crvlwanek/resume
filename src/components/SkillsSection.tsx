import * as React from "react"

import data from "../site-data.json"
import theme from "../theme"
import Button from "./Button"

import GenericSection from "./GenericSection"

interface SkillsSectionProps {}

const styles = {
  description: {
    color: theme.textSecondary,
    padding: "10px",
  },
  skillHeader: {
    fontWeight: 500,
  },
  chipBox: {
    margin: "auto",
    maxWidth: "600px",
    padding: "10px",
  },
}

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
  return (
    <GenericSection bottom name="skills">
      <p style={styles.description}>
        Click on a keyword to view all of my projects that use that technology
      </p>
      {data.skills.map(skill => (
        <>
          <h2 style={styles.skillHeader}>{skill.name}</h2>
          <div style={styles.chipBox}>
            {skill.items.map(item => (
              <Button
                color={theme.primary1}
                href={`https://github.com/crvlwanek?tab=repositories&q=${item}`}
                textColor={theme.light1}
                customStyles={{ margin: "5px" }}
              >
                {item}
              </Button>
            ))}
          </div>
        </>
      ))}
    </GenericSection>
  )
}

export default SkillsSection
