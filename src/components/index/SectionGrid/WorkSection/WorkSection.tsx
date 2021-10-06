import { Divider } from "@mui/material"
import * as React from "react"
import { Job, jobs } from "../../../../data"
import CardList from "../../../common/CardList"
import ExpandableCard from "../ExpandableCard"
import GenericSection from "../GenericSection"
import TextList from "../TextList"

interface WorkSectionProps {}

const WorkSection: React.FC<WorkSectionProps> = ({}) => {
  return (
    <GenericSection name="work">
      <CardList>
        {jobs.map((job: Job, index: number) => (
          <>
            {index ? <Divider variant="inset" /> : null}
            <ExpandableCard
              image={job.logo}
              title={job.title}
              subtitle1={job.employer}
              subtitle2={`${job.startDate} - ${job.endDate}`}
              subtitle3={job.location}
              details={<TextList items={job.responsibilities} />}
            />
          </>
        ))}
      </CardList>
    </GenericSection>
  )
}

export default WorkSection
