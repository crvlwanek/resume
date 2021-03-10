import * as React from "react"

import { Grid } from "@material-ui/core"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"

import IconBarItem from "./IconBarItem"

const iconBarItems = [
  {
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/crvlwanek/",
  },
  {
    icon: GitHubIcon,
    link: "https://github.com/crvlwanek",
  },
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/crvlwanek/",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/crvlwanek/",
  },
  {
    icon: YouTubeIcon,
    link: "https://www.youtube.com/channel/UCZr2XDqp-GhzDHcU2phCeKQ/videos",
  },
]

const IconBar = props => {
  return (
    <Grid
      className={props.padding ? "icon-bar" : ""}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      {iconBarItems.map((item, index) => (
        <IconBarItem key={index} icon={item.icon} link={item.link} />
      ))}
    </Grid>
  )
}

export default IconBar
