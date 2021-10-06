import { Button, Divider } from "@mui/material"
import * as React from "react"
import { education } from "../../../../data"
import CardList from "../../../common/CardList"
import FlexCenter from "../../../common/FlexCenter"
import ExpandableCard from "../ExpandableCard"
import GenericSection from "../GenericSection"
import TextList from "../TextList"
import EdModal from "./EdModal"

interface EducationSectionProps {}

const EducationSection: React.FC<EducationSectionProps> = ({}) => {
  return (
    <GenericSection name="education">
      <CardList>
        {education.map((degree, index) => (
          <>
            {/* TODO: Factor out */}
            <Divider variant={index ? "inset" : "fullWidth"} />
            <ExpandableCard
              image={degree.logo}
              title={degree.institution}
              subtitle1={degree.degree}
              // TODO: Factor out to a function
              subtitle2={`${degree.startDate} - ${degree.endDate}`}
              subtitle3={degree.location}
              details={
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
          </>
        ))}
      </CardList>
    </GenericSection>
  )
}

export default EducationSection
