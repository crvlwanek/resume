import { IconButton } from "@material-ui/core"
import React from "react"

export const IconBarItem = props => {
  const Icon = props.icon
  return (
    <IconButton href={props.link} target="_blank">
      <Icon className="icon" />
    </IconButton>
  )
}
