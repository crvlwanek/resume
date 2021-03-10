import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import ColorStripe from "../components/ColorStripe"
import Avatar from "../components/Avatar"
import NameBlock from "../components/NameBlock"
import WorkSection from "../components/WorkSection"
import EducationSection from "../components/EducationSection"
import SkillsSection from "../components/SkillsSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <ColorStripe />
      <Avatar />
      <NameBlock />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
    </Layout>
  )
}

export default IndexPage
