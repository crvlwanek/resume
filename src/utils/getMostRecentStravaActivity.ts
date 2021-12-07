import axios from "axios"

const getMostRecentStravaActivity = async () => {
  const res = await axios.get(
    "https://n4zn13a3hc.execute-api.us-east-2.amazonaws.com/default/getMostRecentStravaActivity"
  )
  return res.data
}

export default getMostRecentStravaActivity
