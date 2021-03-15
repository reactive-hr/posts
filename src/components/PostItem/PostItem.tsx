import withLogger from '../../utils/withLogger'

interface IPostItemParams {
  data: { [x: string]: any }
  [x: string]: any
}

function PostItem({ data, ...otherProps }: IPostItemParams) {
  const { logger } = otherProps
  logger(data)

  return <div>{data.user.name}</div>
}

export default withLogger(PostItem)
