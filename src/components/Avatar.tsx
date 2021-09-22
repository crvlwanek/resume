import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import theme from "../theme"

interface AvatarProps {
  image: string
  size?: string
}

const styles = {
  avatar: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderColor: theme.light1,
    borderRadius: "100%",
    borderStyle: "solid",
    borderWidth: "6px",
    filter: "drop-shadow(3px 3px 4px black)",
    position: "relative" as "relative",
  },
}

const Avatar: React.FC<AvatarProps> = ({
  image,
  size = "min(18rem, 80vw)",
}) => {
  return (
    <StaticImage
      alt=""
      style={{
        ...styles.avatar,
        height: size,
        width: size,
      }}
      src="../images/chris.jpg"
    />
  )
}

export default Avatar
