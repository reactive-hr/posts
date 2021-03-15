import usePosts from '../hooks/usePosts'
import withLogger from '../utils/withLogger'
import Loading from '../components/Loading'

function Posts({ ...props }) {
  const resPosts = usePosts()
  const { logger } = props
  logger(resPosts)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>All Posts</h3>
          {resPosts.isLoading && <Loading />}
        </div>
      </div>
    </div>
  )
}

export default withLogger(Posts)
