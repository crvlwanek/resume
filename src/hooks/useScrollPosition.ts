import * as React from "react"

const useScrollPosition = <TArgs extends any>(
  handler: (args: TArgs) => boolean,
  args: TArgs
): boolean => {
  const [scroll, setScroll] = React.useState<boolean>(handler(args))
  const listener = () => {
    setScroll(handler(args))
  }
  React.useLayoutEffect(() => {
    listener()
  }, [])

  React.useEffect(() => {
    window?.addEventListener("scroll", listener)
    return () => window?.removeEventListener("scroll", listener)
  }, [scroll])

  return scroll
}

export default useScrollPosition
