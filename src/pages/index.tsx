import { Grid } from "@mui/material"
import * as React from "react"
import FlexCenter from "../components/common/FlexCenter"
import HeroSplash from "../components/common/HeroSplash"
import IconBar from "../components/common/IconBar"
import Navbar from "../components/common/Navbar"
import PageWrapper from "../components/common/PageWrapper"
import MainTitleBox from "../components/index/MainTitleBox"
import Footer from "../components/index/Footer/Footer"
import Header from "../components/index/Header"
import DesktopMenu from "../components/index/Navbar/DesktopMenu"
import MobileMenu from "../components/index/Navbar/MobileMenu"
import EducationSection from "../components/index/SectionGrid/EducationSection/EducationSection"
import SectionGrid from "../components/index/SectionGrid/SectionGrid"
import SkillsSection from "../components/index/SectionGrid/SkillsSection/SkillsSection"
import WorkSection from "../components/index/SectionGrid/WorkSection/WorkSection"
import AvatarTitleBlock from "../components/index/AvatarTitleBlock"
import TitleBlock from "../components/index/TitleBlock"
import ProjectsSection from "../components/index/SectionGrid/ProjectsSection"
import useIsMobile from "../hooks/useIsMobile"
import useRefScrollPosition from "../hooks/useRefScrollPosition"
import "../styles/styles.css"
import { background, deskImage } from "../theme"

const IndexPage = () => {
  const isMobile: boolean = useIsMobile()
  const titleRef = React.useRef<HTMLSpanElement>(null)
  const titleInView: boolean = useRefScrollPosition(titleRef)
  const header__height = isMobile ? "auto" : "100vh"
  const splashImage__height = isMobile ? "200px" : "100vh"
  const navbar__leftContent = isMobile ? <MobileMenu /> : null
  const navbar__centerContent = !titleInView ? (
    <TitleBlock headerVariant="h6" subheaderVariant="subtitle2" />
  ) : null
  const navbar__rightConent = !isMobile ? <DesktopMenu /> : null
  return (
    <PageWrapper>
      <Navbar
        transparentAtTop
        color="surface"
        leftContent={navbar__leftContent}
        centerContent={navbar__centerContent}
        rightContent={navbar__rightConent}
      />
      <Header height={header__height}>
        <HeroSplash
          src={deskImage}
          height={splashImage__height}
          sx={{ position: "absolute" }}
        />
        <MainTitleBox>
          <AvatarTitleBlock
            boxSx={{ textAlign: "center" }}
            avatarSize={isMobile ? "200px" : "18rem"}
            avatarSx={{ margin: "auto" }}
            headerSx={{ mt: 1 }}
            subheaderSx={{ fontWeight: 200 }}
            titleRef={titleRef}
          />
          <IconBar color={isMobile ? "dark" : "imageOverlay"} />
        </MainTitleBox>
      </Header>
      <FlexCenter sx={{ background }}>
        <Grid
          container
          p="16px 0"
          maxWidth={1200}
          gap={2}
          justifyContent="center"
        >
          <Grid item md={4} sm={8} xs={12}>
            <SectionGrid>
              <WorkSection />
              <EducationSection />
              <SkillsSection />
            </SectionGrid>
          </Grid>
          <Grid item md={7} sm={8} xs={12}>
            <ProjectsSection />
          </Grid>
        </Grid>
      </FlexCenter>
      <Footer />
    </PageWrapper>
  )
}
export default IndexPage
