import * as React from "react"

interface AvatarProps {
  image: string
  size?: string
}

const styles = {
  avatar: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderColor: "white",
    borderRadius: "100%",
    borderStyle: "solid",
    borderWidth: "6px",
    filter: "drop-shadow(3px 3px 4px black)",
    position: "relative" as "relative",
  },
}

export const Avatar: React.FC<AvatarProps> = ({ image, size = "18rem" }) => {
  return (
    <img
      style={{
        ...styles.avatar,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${image})`,
        height: size,
        width: size,
      }}
    />
  )
}
