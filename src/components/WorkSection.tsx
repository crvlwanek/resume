import * as React from "react"

import data from "../site-data.json"
import styles from "./sectionStyles"

import GenericSection from "./GenericSection"

interface WorkSectionProps {}

const WorkSection: React.FC<WorkSectionProps> = () => {
  return (
    <GenericSection top name="work">
      {data.work.map(job => (
        <div className="flexRowCol" key={job.title} style={styles.row}>
          <div
            style={{
              ...styles.logo,
              backgroundImage: `url(${job.logo})`,
            }}
          ></div>
          <div style={styles.detailBox}>
            <h3 style={styles.title}>{job.title}</h3>
            <h4 style={styles.subtitle}>{job.employer}</h4>
            <p
              style={styles.detailText}
            >{`${job.startDate} -- ${job.endDate}`}</p>
            <p style={styles.detailText}>{job.location}</p>
            <ul style={styles.list}>
              {job.responsibilities.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </GenericSection>
  )
}

export default WorkSection
