import * as React from "react"
import axios from "axios"

const useLambdaEndpoint = (endpoint: string) => {
  const [data, setData] = React.useState<any>()
  const [error, setError] = React.useState<any>()

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(endpoint)
        setData(result.data)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [endpoint])

  return { data, error }
}

export default useLambdaEndpoint
