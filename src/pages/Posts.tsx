import usePosts from '../hooks/usePosts'
import withLogger from '../utils/withLogger'

function Posts({ ...props }) {
  const resPosts = usePosts()
  const { logger } = props
  logger(resPosts)

  return <div>Posts</div>
}

export default withLogger(Posts)
