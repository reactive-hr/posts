import withLogger from '../utils/withLogger'

function Home({ ...props }) {
  const { logger } = props
  logger()

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Home Page</h3>
        </div>
      </div>
    </div>
  )
}

export default withLogger(Home)
