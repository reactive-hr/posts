import { useState } from 'react'

import usePosts from '../hooks/usePosts'
import withLogger from '../utils/withLogger'
import Loading from '../components/Loading'
import PostItem from '../components/PostItem'
import SearchPost from '../components/SearchPost'

function Posts({ ...props }) {
  const [filter, setFilter] = useState('')
  const resPosts = usePosts()
  const { logger } = props
  logger()

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>All Posts</h3>
          <SearchPost onChange={(inputString: string) => setFilter(inputString)} />
          {resPosts.isLoading ? (
            <Loading />
          ) : (
            resPosts.data.map(item => {
              if (
                filter !== '' &&
                item.user.name.substr(0, filter.length).toUpperCase() !== filter.toUpperCase()
              ) {
                return null
              }
              return <PostItem data={item} key={item.id} />
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default withLogger(Posts)
