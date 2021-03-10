import * as React from "react"

import { IconButton } from "@material-ui/core"

const IconBarItem = props => {
  const Icon = props.icon
  return (
    <IconButton href={props.link} target="_blank">
      <Icon className="icon" />
    </IconButton>
  )
}

export default IconBarItem
