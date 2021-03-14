import useFetch from '../hooks/useFetch'
import withLogger from '../utils/withLogger'

function Posts({ ...props }) {
  const res = useFetch('posts', 'https://jsonplaceholder.typicode.com/posts')
  const { logger } = props
  logger(res)

  return <div>Posts</div>
}

export default withLogger(Posts)
