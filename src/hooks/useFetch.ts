import { useEffect, useState } from 'react'

// TODO caching with key
function useFetch(key: string, url: string, options?: {}) {
  const [res, setRes] = useState({
    isLoading: true,
    data: null,
    error: null,
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options)
        // throw error ako response.status nije 2XX
        if (!response.ok) {
          throw new Error(`Response ${response.status}`)
        }
        const data = await response.json()

        setRes(prevRes => ({
          ...prevRes,
          isLoading: false,
          data,
          error: null,
        }))
      } catch (error) {
        setRes(prevRes => ({
          ...prevRes,
          isLoading: false,
          data: null,
          error,
        }))
      }
    }

    fetchData()
  }, [url, options])

  return res
}

export default useFetch
