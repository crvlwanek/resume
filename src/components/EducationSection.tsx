import * as React from "react"

import data from "../site-data.json"
import styles from "./sectionStyles"

import GenericSection from "./GenericSection"
import ModalWrapper from "./GenericWrapper"
import Button from "./Button"
import theme from "../theme"
import Modal from "./Modal"
import MenuMask from "./MenuMask"
import IconButton from "./IconButton"
import CertificateIcon from "../svg/CertificateIcon"

interface EducationSectionProps {}

const modalStyles = {
  banner: {
    alignItems: "center",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "20px 0 0 0",
    color: theme.light1,
    display: "flex",
    fontFamily: theme.font1,
    fontSize: "1.8rem",
    fontWeight: 700,
    height: "225px",
    justifyContent: "center",
    textAlign: "center" as "center",
    textShadow: `2px 2px 5px ${theme.dark1}`,
  },
  textBox: {
    padding: "10px",
  },
  description: {
    textAlign: "center" as "center",
  },
  subjectName: {
    color: theme.dark1,
    fontFamily: theme.font1,
    fontWeight: 600,
    padding: "10px",
  },
  flexRow: {
    alignItems: "center",
    display: "flex",
  },
  placeholder: {
    height: "45px",
    width: "50px",
  },
  link: {
    color: theme.primary1,
    paddingLeft: "10px",
    textDecoration: "none",
  },
}

const EducationSection: React.FC<EducationSectionProps> = ({}) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  return (
    <GenericSection name="education">
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
                  <Modal closeFunction={handleModalClose} condition={modalOpen}>
                    <div style={modalStyles.banner}>
                      <h1>Open Source Computer Science</h1>
                    </div>
                    <div style={modalStyles.textBox}>
                      <p style={modalStyles.description}>
                        A collection of online courses by reputable universities
                        intended to satisfy the requirements of a traditional
                        Bachelor's degree in Computer Science.
                      </p>
                      {item?.onlineClasses?.map(subject => (
                        <>
                          <h1 style={modalStyles.subjectName}>
                            {subject.name}
                          </h1>
                          {subject.courses.map(course => (
                            <div style={modalStyles.flexRow}>
                              {course.credential ? (
                                <IconButton
                                  link={course.credential}
                                  icon={CertificateIcon}
                                />
                              ) : (
                                <div style={modalStyles.placeholder}></div>
                              )}
                              <a
                                target="_blank"
                                rel="noreferrer"
                                style={modalStyles.link}
                                href={course.link}
                              >
                                {course.courseName}
                              </a>
                            </div>
                          ))}
                        </>
                      ))}
                    </div>
                  </Modal>
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
