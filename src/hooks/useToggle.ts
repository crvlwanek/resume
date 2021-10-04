import * as React from "react"

type UseToggle = [
  boolean,
  React.MouseEventHandler,
  React.MouseEventHandler,
  React.MouseEventHandler
]

const useToggle = (initialState: boolean = false): UseToggle => {
  const [state, setState] = React.useState(initialState)
  const toggleState: React.MouseEventHandler = () => {
    setState(!state)
  }
  const setStateTrue: React.MouseEventHandler = () => {
    setState(true)
  }
  const setStateFalse: React.MouseEventHandler = () => {
    setState(false)
  }
  return [state, toggleState, setStateTrue, setStateFalse]
}

export default useToggle
