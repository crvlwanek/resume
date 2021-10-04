import * as React from "react"

import { Avatar } from "@mui/material"
import useIsMobile from "../../../hooks/useIsMobile"

interface MyAvatarProps {
  src: string
}

const MyAvatar: React.FC<MyAvatarProps> = ({ src }) => {
  const isMobile: boolean = useIsMobile()
  const size = isMobile ? "100px" : "18rem"
  const borderWidth = isMobile ? "2px" : "6px"
  return (
    <Avatar
      src={src}
      sx={{
        height: size,
        width: size,
        borderColor: "white",
        borderStyle: "solid",
        borderWidth,
      }}
    />
  )
}

export default MyAvatar
