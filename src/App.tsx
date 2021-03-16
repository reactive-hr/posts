import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import withLogger from './utils/withLogger'

import Home from './pages/Home'
import Post from './pages/Post'
import Posts from './pages/Posts'
import Page404 from './pages/Page404'

function App({ ...props }) {
  const { logger } = props
  logger()

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default withLogger(App)
