import * as React from "react"
import { jobs } from "../../../../data"
import dateRange from "../../../../utils/dateRange"
import CardList from "../../../common/CardList"
import IndexDivider from "../../../common/IndexDivider"
import ExpandableCard from "../../../common/ExpandableCard"
import GenericSection from "../GenericSection"
import TextList from "../../../common/TextList"

interface WorkSectionProps {}

const WorkSection: React.FC<WorkSectionProps> = ({}) => {
  return (
    <GenericSection name="work">
      <CardList>
        {jobs.map((job, index) => (
          <div key={job.title}>
            <IndexDivider index={index} />
            <ExpandableCard
              image={job.image}
              title={job.title}
              subtitle1={job.subtitle1}
              subtitle2={dateRange(job.startDate, job.endDate)}
              subtitle3={job.subtitle3}
              content={<TextList items={job.details} />}
            />
          </div>
        ))}
      </CardList>
    </GenericSection>
  )
}

export default WorkSection
