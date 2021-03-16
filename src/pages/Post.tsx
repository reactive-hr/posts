import { useParams } from 'react-router'

import usePost from '../hooks/usePost'
import withLogger from '../utils/withLogger'

function Post({ ...props }) {
  const { id } = useParams<{ id: string }>()
  const resPost = usePost(id)
  const { logger } = props
  logger(resPost)

  return <div>Post {id}</div>
}

export default withLogger(Post)
