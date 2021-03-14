import withLogger from '../utils/withLogger'

function Posts({ ...props }) {
  const { logger } = props
  logger()

  return <div>Posts</div>
}

export default withLogger(Posts)
