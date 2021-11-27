import * as React from "react"

const scrollIsAtTop = (): boolean => {
  if (typeof window === "undefined") return true
  return window?.scrollY < 10
}

const useScrollAtTop = () => {
  const [scrollAtTop, setScrollAtTop] = React.useState(true)
  const listener = () => {
    if (scrollIsAtTop()) {
      setScrollAtTop(true)
    } else {
      setScrollAtTop(false)
    }
  }

  React.useEffect(() => {
    setScrollAtTop(scrollIsAtTop())
  }, [])

  React.useEffect(() => {
    window?.addEventListener("scroll", listener)
    return () => window?.removeEventListener("scroll", listener)
  }, [scrollAtTop])

  return scrollAtTop
}

export default useScrollAtTop
