import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

const useIsMobile = (): boolean => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down("sm"))
}

export const useMediumDown = (): boolean => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down("md"))
}

export default useIsMobile
