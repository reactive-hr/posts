import Home from './pages/Home'
import withLogger from './utils/withLogger'

import './App.css'

function App({ ...props }) {
  const { logger } = props
  logger()

  return <Home />
}

export default withLogger(App, { msg: 'Pozdrav iz' })
