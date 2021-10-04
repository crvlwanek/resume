import * as React from "react"

const useWindowWidth = () => {
  return (
    window?.innerWidth ||
    document?.documentElement?.clientWidth ||
    document?.body?.clientWidth
  )
}

export default useWindowWidth
