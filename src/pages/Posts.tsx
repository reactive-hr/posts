import usePosts from '../hooks/usePosts'
import withLogger from '../utils/withLogger'
import Loading from '../components/Loading'
import PostItem from '../components/PostItem'
import SearchPost from '../components/SearchPost'

function Posts({ ...props }) {
  const resPosts = usePosts()
  const { logger } = props
  logger(resPosts)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>All Posts</h3>
          <SearchPost onChange={(a: string) => console.log(a)} />
          {resPosts.isLoading ? <Loading /> : <PostItem />}
        </div>
      </div>
    </div>
  )
}

export default withLogger(Posts)
