function PostItem({ ...otherProps }) {
  const { logger } = otherProps
  logger()

  return <div>Post Item</div>
}

export default PostItem
