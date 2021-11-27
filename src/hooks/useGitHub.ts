import * as React from "react"
import axios from "axios"

const useGitHub = (endpoint: string) => {
  const [data, setData] = React.useState()
  const getData = async () => {
    const res = await axios.get(`https://api.github.com/${endpoint}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    })
    setData(res.data)
  }
  React.useEffect(() => {
    getData()
  }, [])
  return data
}

export default useGitHub
