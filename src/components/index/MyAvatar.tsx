import * as React from "react"
import { Avatar } from "@mui/material"
import useIsMobile from "../../hooks/useIsMobile"
import avatarImage from "../../images/chris.jpg"
import { MuiSxMixin } from "../../interfaces/mui"

interface MyAvatarProps extends MuiSxMixin {
  size: string
}

const MyAvatar: React.FC<MyAvatarProps> = ({ size, sx }) => {
  const isMobile: boolean = useIsMobile()
  const borderWidth = isMobile ? "3px" : "6px"
  return (
    <Avatar
      src={avatarImage}
      sx={{
        height: size,
        width: size,
        borderColor: "white",
        borderStyle: "solid",
        borderWidth,
        ...sx,
      }}
    />
  )
}

export default MyAvatar
