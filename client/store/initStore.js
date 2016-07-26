import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers'
import initialState from './initialState'

import { subscribeTo } from './subscribeTo'
import smartDispatch from './dispatcher'
import Backlog from './Backlog'

const middleware = routerMiddleware(browserHistory)

const defaultStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(middleware)
)


//We want to extend the store to have subscribeTo, smartDispatch, register, and syncWithStore 
const backlog = new Backlog({ 
  subscribeTo: subscribeTo.bind(defaultStore),
  smartDispatch: smartDispatch.bind(defaultStore)
});

export const store = Object.assign({}, defaultStore, backlog)
