import 'noconsole'
import React from 'react'
import ReactDOM from 'react-dom'
import { createHashHistory } from 'history'
import { Router, Route, Redirect, IndexRoute, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Tabs from './containers/tabs'
import Login from './containers/login'
import { store } from './store/initStore'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(appHistory, store)

/*
  Create Hash history with clean url and pass into render

  render the routes, only have 2. Refreshing the page will move you to home. 
  The Tabs container has a navbar and handles tab changes.
  Should probably be changed to allow specific routes for UX purposes
 */


ReactDOM.render(
  <Router history={history}> 
    <Route path='/'component={Tabs}/>
    <Route path='/login' component={Login} />
  </Router>,
  document.getElementById('app')
)
