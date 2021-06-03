import * as React from "react"

import { setViewHeight } from "../utils/setViewHeight"

interface HeroSplashProps {
  image: string
  splashText?: string
}

setViewHeight()

const styles = {
  splash: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    position: "relative" as "relative",
    textShadow: "3px 3px 5px black",
    width: "auto",
  },
  content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column" as "column",
    margin: "auto",
    maxWidth: "500px",
    textAlign: "center" as "center",
  },
  splashText: {
    color: "white",
    fontFamily: "var(--hero__splash-text-font)",
    fontSize: "3rem",
    margin: 0,
    width: "100%",
  },
}

export const HeroSplash: React.FC<HeroSplashProps> = ({
  children,
  image,
  splashText,
}) => {
  return (
    <section id="hero__">
      <div
        className="hero__splash"
        style={{
          ...styles.splash,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
        }}
      >
        <div style={styles.content}>
          <h1 style={styles.splashText}>{splashText}</h1>
          {children}
        </div>
      </div>
    </section>
  )
}
