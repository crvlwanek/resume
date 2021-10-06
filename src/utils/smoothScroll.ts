import * as React from "react"

const smoothScroll = (id: string) => {
  document
    ?.getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
}

export default smoothScroll
