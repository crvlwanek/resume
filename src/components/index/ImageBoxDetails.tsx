import * as React from "react"
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"

interface ImageBoxDetailsProps {
  details: string[]
}

const ImageBoxDetails: React.FC<ImageBoxDetailsProps> = ({ details }) => {
  return (
    <List>
      {details.map((detail: string) => (
        <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginTop: "4px",
            }}
          >
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary={detail} />
        </ListItem>
      ))}
    </List>
  )
}

export default ImageBoxDetails
