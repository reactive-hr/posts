import withLogger from '../utils/withLogger'

function Page404({ ...props }) {
  const { logger } = props
  logger()

  return <div>404</div>
}

export default withLogger(Page404)
