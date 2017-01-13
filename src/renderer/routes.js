import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'

/* containers */
import App from './containers/App'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import InputPage from './containers/InputPage'
import NotFoundPage from './containers/NotFoundPage'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/" component={HomePage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/input" component={InputPage}/>
    <Route path="/404" component={NotFoundPage}/>
    <Redirect from='*' to='/404'/>
  </Route>
)

export default routes
