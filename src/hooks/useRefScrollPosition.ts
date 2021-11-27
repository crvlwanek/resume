import * as React from "react"

const refScrollPosition = (ref: React.RefObject<HTMLSpanElement>): boolean => {
  return (ref?.current?.getBoundingClientRect().y || 0) > 20
}

const useRefScrollPosition = (ref: React.RefObject<HTMLSpanElement>) => {
  const [refInView, setRefInView] = React.useState(refScrollPosition(ref))
  const listener = () => {
    if (refScrollPosition(ref)) {
      setRefInView(true)
    } else {
      setRefInView(false)
    }
  }

  React.useEffect(() => {
    window?.addEventListener("scroll", listener)
    return () => window?.removeEventListener("scroll", listener)
  }, [refInView])

  return refInView
}

export default useRefScrollPosition
