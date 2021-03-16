import { useParams } from 'react-router'

import usePost from '../hooks/usePost'
import withLogger from '../utils/withLogger'
import PostItem from '../components/PostItem'

function Post({ ...props }) {
  const { id } = useParams<{ id: string }>()
  const { isLoading, data} = usePost(id)
  const { logger } = props
  logger()

  return isLoading ? <></> : <PostItem data={data[0]}/>
}

export default withLogger(Post)
