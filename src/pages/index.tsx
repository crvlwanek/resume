import { Box, Divider, Grid, Paper, Slide } from "@mui/material"
import * as React from "react"
import DarkModeToggle from "../components/common/DarkModeToggle"
import ExpandableCard from "../components/common/ExpandableCard"
import HeroSplash from "../components/common/HeroSplash"
import IconBar from "../components/common/IconBar"
import Navbar from "../components/common/Navbar"
import PageWrapper from "../components/common/PageWrapper"
import AvatarTitleBlock from "../components/index/AvatarTitleBlock"
import Footer from "../components/index/Footer/Footer"
import Header from "../components/index/Header"
import MainTitleBox from "../components/index/MainTitleBox"
import DesktopMenu from "../components/index/Navbar/DesktopMenu"
import MobileMenu from "../components/index/Navbar/MobileMenu"
import EducationSection from "../components/index/SectionGrid/EducationSection/EducationSection"
import ProjectsSection from "../components/index/SectionGrid/ProjectsSection"
import SectionGrid from "../components/index/SectionGrid/SectionGrid"
import SkillsSection from "../components/index/SectionGrid/SkillsSection/SkillsSection"
import WorkSection from "../components/index/SectionGrid/WorkSection/WorkSection"
import Strava from "../components/index/Strava"
import TitleBlock from "../components/index/TitleBlock"
import useIsMobile, { useMediumDown } from "../hooks/useIsMobile"
import useScrollPosition from "../hooks/useScrollPosition"
import "../styles/styles.css"
import { deskImage } from "../theme"

const IndexPage = () => {
  const isMobile = useIsMobile()
  const isMediumDown = useMediumDown()
  const titleRef = React.useRef<HTMLSpanElement>(null)
  const titleInView = useScrollPosition(
    (ref: React.RefObject<HTMLSpanElement>): boolean =>
      (ref?.current?.getBoundingClientRect().y || 0) < 0,
    titleRef
  )
  const titleContent = (
    <Slide in={titleInView} mountOnEnter unmountOnExit>
      <Box>
        <TitleBlock
          headerVariant="h6"
          subheaderVariant="subtitle2"
          wrapperSx={{
            ml: isMediumDown ? 0 : 2,
            ...(isMediumDown ? { textAlign: "center" } : null),
          }}
        />
      </Box>
    </Slide>
  )
  const header__height = isMobile ? "auto" : "100vh"
  const splashImage__height = isMobile ? "min(200px, 90vw)" : "100vh"
  const navbar__leftContent = isMediumDown ? <MobileMenu /> : titleContent
  const navbar__centerContent = isMediumDown ? titleContent : null
  const navbar__rightConent = !isMediumDown ? (
    <DesktopMenu />
  ) : (
    <DarkModeToggle />
  )
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
          sx={{ position: "absolute", zIndex: 2 }}
        />
        <MainTitleBox>
          <AvatarTitleBlock
            boxSx={{ textAlign: "center", zIndex: 2 }}
            avatarSize={isMobile ? "min(200px, 90vw)" : "18rem"}
            avatarSx={{ margin: "auto" }}
            headerSx={{ mt: 1 }}
            subheaderSx={{ fontWeight: 200 }}
            titleRef={titleRef}
          />
          <IconBar sx={{ zIndex: 3 }} />
        </MainTitleBox>
      </Header>
      <Divider sx={{ bgcolor: "background.paper" }} />
      <Paper sx={{ borderRadius: 0 }}>
        <ExpandableCard
          title="Health Dashboard"
          content={<Strava />}
          sx={{ display: "flex", justifyContent: "center", gap: 2 }}
          titleVariant="h5"
        />
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          borderRadius: 0,
        }}
      >
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
      </Paper>
      <Footer />
    </PageWrapper>
  )
}
export default IndexPage
