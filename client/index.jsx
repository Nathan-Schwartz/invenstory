import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import HomeContainer from './containers/home'
import DashboardContainer from './containers/dashboard'
import LoginContainer from './containers/login'
import { store } from './store/initStore'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}> 
      <Route path='/' component={LoginContainer}/>
      <Route path='/home'component={HomeContainer}/>
      <Route path='/dashboard' component={DashboardContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
