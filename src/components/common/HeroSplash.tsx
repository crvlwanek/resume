import * as React from "react"
import { MuiSxMixin } from "../../interfaces/mui"

import FlexCenter from "./FlexCenter"

interface HeroSplashProps extends MuiSxMixin {
  height: string
  src: string
}

const HeroSplash: React.FC<HeroSplashProps> = ({
  children,
  height,
  src,
  sx,
}) => {
  return (
    <FlexCenter
      sx={{
        overflow: "hidden",
        height: height,
        width: "100%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        textShadow: "3px 3px 5px black",
        ...sx,
      }}
    >
      {children}
    </FlexCenter>
  )
}

export default HeroSplash
