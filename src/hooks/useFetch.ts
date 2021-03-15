import { useEffect, useState } from 'react'
import { IUseFetchRet } from './types'

// TODO caching with key
function useFetch(key: string, url: string, options?: {}): IUseFetchRet {
  const [res, setRes] = useState<IUseFetchRet>({
    isLoading: true,
    data: [],
    error: null,
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options)
        // throw error if response.status not 2XX
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
          data: [],
          error,
        }))
      }
    }

    fetchData()
  }, [url, options])

  return res
}

export default useFetch
