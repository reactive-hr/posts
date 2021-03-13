import Btn from '../components/Btn'
import withLogger from '../utils/withLogger'

function Home({ ...props }) {
  const { logger } = props
  logger()

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Btn name="Prvi" />
        </div>
        <div className="col-sm">
          <Btn name="Drugi" />
        </div>
        <div className="col-sm">
          <Btn name="Treći" />
        </div>
      </div>
    </div>
  )
}

export default withLogger(Home)
