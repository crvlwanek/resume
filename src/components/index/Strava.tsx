import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun"
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk"
import { Box, Divider, Paper, Typography } from "@mui/material"
import * as React from "react"
import useLambdaEndpoint from "../../hooks/useLambdaEndpoint"
import PoweredByStrava from "../../svg/powered-by-strava.inline.svg"

const metersToMiles = (meters: number) => meters * 0.000621371
const formatDistance = (meters: number) =>
  `${metersToMiles(meters).toFixed(2)} mi`
const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secondsLeft = Math.floor(seconds % 60)
  if (hours) {
    return `${hours}h ${minutes}m`
  }
  if (minutes) {
    return `${minutes}m ${secondsLeft}s`
  }
  return `${secondsLeft}s`
}
const formatMinutesPerMile = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const secondsLeft = Math.floor(seconds % 60)
  return `${minutes}:${secondsLeft} /mi`
}
const metersPerSecondToMinutesPerMile = (metersPerSecond: number) => {
  const seconds = 1609.34 / metersPerSecond
  return formatMinutesPerMile(seconds)
}
const getActivityType = (type: string) => {
  switch (type) {
    case "Ride":
      return <DirectionsBikeIcon />
    case "Run":
      return <DirectionsRunIcon />
    case "Walk":
      return <DirectionsWalkIcon />
    default:
      return <DirectionsWalkIcon />
  }
}
const formatDate = (date: string) => {
  const dateObj = new Date(date)
  const month = dateObj.toLocaleString("default", { month: "long" })
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  const hours = dateObj.getHours()
  const minutes = dateObj.getMinutes()
  return `${month} ${day}, ${year} at ${hours}:${minutes}`
}

interface DataItemProps {
  title: string
  value: string
}

const DataItem: React.FC<DataItemProps> = ({ title, value }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
    </Box>
  )
}

interface StravaProps {}

const Strava: React.FC<StravaProps> = ({}) => {
  const { data } = useLambdaEndpoint(
    "https://n4zn13a3hc.execute-api.us-east-2.amazonaws.com/default/getMostRecentStravaActivity"
  )
  if (!data) {
    return <></>
  }
  const { name, distance, moving_time, type, average_speed, start_date } = data
  const icon = getActivityType(type)
  return (
    <Box display="flex" justifyContent="center">
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          m: 2,
          borderRadius: 1,

          maxWidth: 400,
        }}
      >
        <Box>
          <Box px={2} py={1}>
            <Box display="flex" flexDirection="row" alignItems="center">
              {icon}
              <Box ml={1}>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="subtitle2">
                  {formatDate(start_date)}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box px={2} py={1}>
            <Box display="flex" gap={2}>
              <DataItem title="Distance" value={formatDistance(distance)} />
              <Divider variant="middle" orientation="vertical" flexItem />
              <DataItem
                title="Pace"
                value={metersPerSecondToMinutesPerMile(average_speed)}
              />
              <Divider variant="middle" orientation="vertical" flexItem />
              <DataItem title="Time" value={formatTime(moving_time)} />
            </Box>
          </Box>
        </Box>
        <PoweredByStrava className="stravaLogo" />
      </Paper>
    </Box>
  )
}

export default Strava
