import * as React from "react"

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"

import ArrowRightIcon from "@mui/icons-material/ArrowRight"

import { Job, jobs } from "../../../../data"
import { onSecondary } from "../../../../theme"

import GenericSection from "../GenericSection"
import ImageBox from "../ImageBox"
import ImageBoxDetails from "../ImageBoxDetails"

interface WorkSectionProps {}

const WorkSection: React.FC<WorkSectionProps> = ({}) => {
  return (
    <GenericSection name="work">
      {jobs.map((job: Job) => (
        <ImageBox src={job.logo}>
          <ImageBoxDetails
            title={job.title}
            subtitle={job.employer}
            startDate={job.startDate}
            endDate={job.endDate}
            location={job.location}
          >
            <List>
              {job.responsibilities.map((res: string) => (
                <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
                  <ListItemIcon
                    sx={{ minWidth: 0, marginTop: "4px", color: onSecondary }}
                  >
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={res} />
                </ListItem>
              ))}
            </List>
          </ImageBoxDetails>
        </ImageBox>
      ))}
    </GenericSection>
  )
}

export default WorkSection
