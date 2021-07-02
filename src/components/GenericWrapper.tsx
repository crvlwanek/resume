import * as React from "react"

interface GenericWrapperProps {
  condition: any
  wrapper: any
}

const GenericWrapper: React.FC<GenericWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children)

export default GenericWrapper
