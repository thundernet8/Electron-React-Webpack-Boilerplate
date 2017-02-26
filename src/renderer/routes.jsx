import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'

/* containers */
import App from './containers/app'
import HomePage from './containers/homePage'
import AboutPage from './containers/aboutPage'
import InputPage from './containers/inputPage'
import NotFoundPage from './containers/notFoundPage'

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
