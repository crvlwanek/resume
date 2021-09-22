import * as React from "react"

import "../components/styles.css"
import data from "../site-data.json"
import theme from "../theme"

import NavBar from "../components/NavBar"
import HeroSplash from "../components/HeroSplash"
import Avatar from "../components/Avatar"
import NameBlock from "../components/NameBlock"
import IconBar from "../components/IconBar"
import WorkSection from "../components/WorkSection"
import EducationSection from "../components/EducationSection"
import SkillsSection from "../components/SkillsSection"
import Footer from "../components/Footer"
import { StaticImage } from "gatsby-plugin-image"

const splashImage =
  "https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
const avatarImage = "../images/chris.jpg"

const hoverColor = theme.primary1

const hover = {
  background: {
    background: hoverColor,
    filter: "",
  },
  color: {
    color: hoverColor,
    filter: "",
  },
}

const IndexPage = () => {
  return (
    <>
      <NavBar rightMenu={data.nav} customHover={hover.color} />
      <HeroSplash image={splashImage}>
        <Avatar image={avatarImage} />
        <NameBlock name={data.splash.name} title={data.splash.jobTitle} />
        <IconBar customHover={hover.background} />
      </HeroSplash>
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <Footer />
    </>
  )
}
export default IndexPage
