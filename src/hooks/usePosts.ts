import { useCallback, useEffect, useState } from 'react'
import { IUseFetchRet } from './types'
import useFetch from './useFetch'

function usePosts(): IUseFetchRet {
  const [res, setRes] = useState<IUseFetchRet>({
    isLoading: true,
    data: [],
    error: null,
  })

  const resPosts = useFetch('posts', 'https://jsonplaceholder.typicode.com/posts')
  const resComments = useFetch('comments', 'https://jsonplaceholder.typicode.com/comments')
  const resUsers = useFetch('users', 'https://jsonplaceholder.typicode.com/users')

  // ***** create posts data
  const getData = useCallback((postsData: any[], commentsData: any[], usersData: any[]): any[] => {
    const ret = postsData.map(postsItem => {
      postsItem.user = usersData.find(usersItem => usersItem.id === postsItem.userId)
      postsItem.comments = commentsData.filter(commentsItem => commentsItem.postId === postsItem.id)

      return postsItem
    })

    return ret
  }, [])

  // ***** is everything loaded
  useEffect(() => {
    if (!resPosts.isLoading && !resComments.isLoading && !resUsers.isLoading) {
      setRes(prevRes => ({
        ...prevRes,
        isLoading: false,
        data: getData(resPosts.data, resComments.data, resUsers.data),
        error: null,
      }))
    }
  }, [
    resPosts.isLoading,
    resComments.isLoading,
    resUsers.isLoading,
    resPosts.data,
    resComments.data,
    resUsers.data,
    getData,
  ])

  // ***** "catch" errors
  useEffect(() => {
    if (resPosts.error) {
      setRes(prevRes => ({
        ...prevRes,
        isLoading: false,
        data: [],
        error: resPosts.error,
      }))
    } else if (resComments.error) {
      setRes(prevRes => ({
        ...prevRes,
        isLoading: false,
        data: [],
        error: resComments.error,
      }))
    } else if (resUsers.error) {
      setRes(prevRes => ({
        ...prevRes,
        isLoading: false,
        data: [],
        error: resUsers.error,
      }))
    }
  }, [resPosts.error, resComments.error, resUsers.error])

  return res
}

export default usePosts
