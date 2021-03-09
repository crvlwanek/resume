import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"
import React from "react"
import { IconBarItem } from "./IconBarItem"

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

const useStyles = makeStyles({
  nameText: {
    textAlign: "center",
  },
  detailText: {
    textAlign: "center",
    paddingTop: "5px",
  },
})

export const NameBlock = () => {
  const classes = useStyles()
  return (
    <Box textAlign="center">
      <Typography className={classes.nameText} variant="h4">
        Chris Van Lanen-Wanek
      </Typography>
      <Typography
        className={classes.detailText}
        variant="body1"
        color="textSecondary"
      >
        Software Engineer | Web Developer
      </Typography>
      <Grid
        className="icon-bar"
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {iconBarItems.map((item, index) => (
          <IconBarItem key={index} icon={item.icon} link={item.link} />
        ))}
      </Grid>
    </Box>
  )
}
