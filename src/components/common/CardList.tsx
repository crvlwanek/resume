import * as React from "react"
import { List } from "@mui/material"

interface CardListProps {}

const CardList: React.FC<CardListProps> = ({ children }) => {
  return <List disablePadding>{children}</List>
}

export default CardList
