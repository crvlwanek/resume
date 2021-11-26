import * as React from "react"

const useGitHub = (endpoint: string) => {
  const [data, setData] = React.useState()
  const getData = async () => {
    const res = await fetch(`https://api.github.com/${endpoint}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    })
    return await res.json()
  }
  React.useEffect(() => {
    getData().then(res => setData(res))
  }, [])
  return data
}

export default useGitHub
