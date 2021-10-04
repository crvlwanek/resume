import * as React from "react"

const scrollIsAtTop = (): boolean => {
  return window?.scrollY < 10
}

const useScrollAtTop = () => {
  const [scrollAtTop, setScrollAtTop] = React.useState(scrollIsAtTop())
  const listener = () => {
    if (scrollIsAtTop()) {
      setScrollAtTop(true)
    } else {
      setScrollAtTop(false)
    }
  }

  React.useEffect(() => {
    window?.addEventListener("scroll", listener)
    return () => window?.removeEventListener("scroll", listener)
  }, [scrollAtTop])

  return scrollAtTop
}

export default useScrollAtTop
