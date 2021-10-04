import * as React from "react"
import { education } from "../../../../data"
import GenericSection from "../GenericSection"
import ImageBoxDetails from "../ImageBoxDetails"
import ImageBox from "../ImageBox"

interface EducationSectionProps {}

const EducationSection: React.FC<EducationSectionProps> = ({}) => {
  return (
    <GenericSection name="education">
      {education.map(degree => (
        <ImageBox src={degree.logo}>
          <ImageBoxDetails
            title={degree.institution}
            subtitle={degree.degree}
            startDate={degree.startDate}
            endDate={degree.endDate}
            location={degree.location}
            details={degree.details}
          ></ImageBoxDetails>
        </ImageBox>
      ))}
    </GenericSection>
  )
}

export default EducationSection
