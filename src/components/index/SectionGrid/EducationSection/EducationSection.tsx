import * as React from "react"
import { education } from "../../../../data"
import dateRange from "../../../../utils/dateRange"
import CardList from "../../../common/CardList"
import FlexCenter from "../../../common/FlexCenter"
import IndexDivider from "../../../common/IndexDivider"
import ExpandableCard from "../../../common/ExpandableCard"
import GenericSection from "../GenericSection"
import TextList from "../../../common/TextList"
import EdModal from "./EdModal"

interface EducationSectionProps {}

const EducationSection: React.FC<EducationSectionProps> = ({}) => {
  return (
    <GenericSection name="education">
      <CardList>
        {education.map((degree, index) => (
          <div key={degree.degree}>
            <IndexDivider index={index} />
            <ExpandableCard
              image={degree.logo}
              title={degree.institution}
              subtitle1={degree.degree}
              subtitle2={dateRange(degree.startDate, degree.endDate)}
              subtitle3={degree.location}
              content={
                <>
                  <TextList items={degree.details} />
                  {degree.additionalDetails ? (
                    <FlexCenter>
                      <EdModal details={degree.additionalDetails} />
                    </FlexCenter>
                  ) : null}
                </>
              }
            />
          </div>
        ))}
      </CardList>
    </GenericSection>
  )
}

export default EducationSection
