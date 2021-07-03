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

const splashImage =
  "https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
const avatarImage =
  "https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/120762512_3486781184693488_4023420854158152202_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=ZZlUYySR7ecAX8359tj&_nc_ht=scontent-msp1-1.xx&oh=0d1a66b5f8046147b877d1d24f4798b9&oe=60DF301F"

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
