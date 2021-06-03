import * as React from "react"

import { IconButton } from "../components/IconButton"

import { LinkedInIcon } from "../svg/LinkedInIcon"
import { GithubIcon } from "../svg/GithubIcon"
import { FacebookIcon } from "../svg/FacebookIcon"
import { InstagramIcon } from "../svg/InstagramIcon"
import { YouTubeIcon } from "../svg/YouTubeIcon"

interface IconBarProps {}

const icons = [
  {
    name: "LinkedIn",
    component: LinkedInIcon,
    link: "https://www.linkedin.com/in/crvlwanek/",
  },
  {
    name: "Github",
    component: GithubIcon,
    link: "https://github.com/crvlwanek",
  },
  {
    name: "Facebook",
    component: FacebookIcon,
    link: "https://www.facebook.com/crvlwanek/",
  },
  {
    name: "Instagram",
    component: InstagramIcon,
    link: "https://www.instagram.com/crvlwanek/",
  },
  {
    name: "YouTube",
    component: YouTubeIcon,
    link: "https://www.youtube.com/c/ChrisVLWanek",
  },
]

const styles = {
  bar: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
  },
}

export const IconBar: React.FC<IconBarProps> = ({ children }) => {
  return (
    <div style={styles.bar}>
      {icons.map(icon => (
        <IconButton icon={icon.component} link={icon.link} key={icon.name} />
      ))}
    </div>
  )
}
