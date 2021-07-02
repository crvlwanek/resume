import * as React from "react"

import data from "../site-data.json"
import styles from "./sectionStyles"

import GenericSection from "./GenericSection"
import ModalWrapper from "./GenericWrapper"
import Button from "./Button"
import theme from "../theme"
import Modal from "./Modal"
import MenuMask from "./MenuMask"

interface EducationSectionProps {}

const EducationSection: React.FC<EducationSectionProps> = ({}) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  return (
    <GenericSection bottom name="education">
      {data.education.map(item => (
        <div className="flexRowCol" key={item.institution} style={styles.row}>
          <div
            style={{
              ...styles.logo,
              backgroundImage: `url(${item.logo}`,
            }}
          ></div>
          <div style={styles.detailBox}>
            <ModalWrapper
              condition={item.institution === "Open Source"}
              wrapper={(children: any) => (
                <div style={{ display: "flex" }}>
                  {children}
                  <Button
                    color={theme.primary1}
                    customActive={{ filter: "" }}
                    customHover={{ filter: "" }}
                    customStyles={{
                      marginLeft: "20px",
                      textTransform: "uppercase",
                    }}
                    onClick={handleModalOpen}
                    variant="transparent"
                  >
                    What's this?
                  </Button>
                  <MenuMask condition={modalOpen} onClick={handleModalClose} />
                  <Modal
                    closeFunction={handleModalClose}
                    condition={modalOpen}
                  />
                </div>
              )}
            >
              <h3 style={styles.title}>{item.institution}</h3>
            </ModalWrapper>
            <h4 style={styles.subtitle}>{item.degree}</h4>
            <p
              style={styles.detailText}
            >{`${item.startDate} -- ${item.endDate}`}</p>
            <p style={styles.detailText}>{item.location}</p>
          </div>
        </div>
      ))}
    </GenericSection>
  )
}

export default EducationSection
