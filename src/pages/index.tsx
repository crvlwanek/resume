import * as React from "react"

import "../styles/styles.css"
import { background, deskImage } from "../theme"

import useIsMobile from "../hooks/useIsMobile"

import PageBase from "../components/common/PageBase"
import MainTitleBox from "../components/index/AvatarBox/MainTitleBox"
import Navbar from "../components/common/Navbar"
import MobileMenu from "../components/index/Navbar/MobileMenu"
import DesktopMenu from "../components/index/Navbar/DesktopMenu"
import Header from "../components/index/Header"
import HeroSplash from "../components/common/HeroSplash"
import AvatarTitleBlock from "../components/index/TitleBlock/AvatarTitleBlock"
import SectionGrid from "../components/index/SectionGrid/SectionGrid"
import WorkSection from "../components/index/SectionGrid/WorkSection/WorkSection"
import EducationSection from "../components/index/SectionGrid/EducationSection/EducationSection"
import SkillsSection from "../components/index/SectionGrid/SkillsSection/SkillsSection"
import Footer from "../components/index/Footer/Footer"
import IconBar from "../components/common/IconBar"
import { Divider, Grid } from "@mui/material"
import FlexCenter from "../components/common/FlexCenter"
import GenericSection from "../components/index/SectionGrid/GenericSection"
import GitHubRepo from "../components/GitHubRepo"

const IndexPage = () => {
  const isMobile: boolean = useIsMobile()
  const header__height = isMobile ? "auto" : "100vh"
  const splashImage__height = isMobile ? "200px" : "100vh"
  const navbar__leftContent = isMobile ? <MobileMenu /> : null
  const navbar__rightConent = !isMobile ? <DesktopMenu /> : null
  return (
    <PageBase>
      <Navbar
        transparentAtTop
        color="surface"
        leftContent={navbar__leftContent}
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
            <GenericSection name="Projects">
              <Divider />
              <GitHubRepo name="leetcode" user="crvlwanek" />
              <Divider variant="inset" />
              <GitHubRepo name="resume" user="crvlwanek" />
              <Divider variant="inset" />
              <GitHubRepo name="digital-music" user="crvlwanek" />
            </GenericSection>
          </Grid>
        </Grid>
      </FlexCenter>
      <Footer />
    </PageBase>
  )
}
export default IndexPage
