import { useParams } from 'react-router'
import withLogger from '../utils/withLogger'

function Post({ ...props }) {
  const { id } = useParams<{ id: string | undefined }>()
  const { logger } = props
  logger()

  return <div>Post {id}</div>
}

export default withLogger(Post)
