import * as React from "react"
import { Box, Stack } from "@mui/material"
import useIsMobile from "../../../hooks/useIsMobile"
import { logoSize } from "../../../theme"

interface ImageBoxProps {
  src: string
}

const ImageBox: React.FC<ImageBoxProps> = ({ children, src }) => {
  const isMobile = useIsMobile()
  return (
    <Stack direction={isMobile ? "column" : "row"}>
      <Box
        sx={{
          backgroundImage: `url(${src})`,
          height: logoSize,
          width: logoSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginX: 3,
          marginTop: 3,
        }}
      ></Box>
      {children}
    </Stack>
  )
}

export default ImageBox
