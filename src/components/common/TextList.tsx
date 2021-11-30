import * as React from "react"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"

interface TextListProps {
  items?: string[]
}

const TextList: React.FC<TextListProps> = ({ items }) => {
  return (
    <List disablePadding sx={{ mb: 1 }}>
      {items?.map((item: string, index: number) => (
        <ListItem
          alignItems="flex-start"
          sx={{ padding: 0 }}
          key={`${item}${index}`}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginTop: "4px",
            }}
          >
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText disableTypography sx={{ mt: "6px", pr: 1 }}>
            <Typography variant="body2">{item}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default TextList
