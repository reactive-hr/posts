import withLogger from '../../utils/withLogger'

function PostItem({ ...otherProps }) {
  const { logger } = otherProps
  logger()

  return <div>Post Item</div>
}

export default withLogger(PostItem)
