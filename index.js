
import React from 'react'
import { assign } from 'lodash'
import { Router } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'

export const routes = [
  {
    component: App,
    childRoutes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
    ]
  }
]

export function Store(init) {
  let state = init || {}
  let listeners = []
  this.getState = () => state
  this.setState = (obj) => {
    state = assign(state, obj)
    listeners.forEach(listener => listener())
  }
  this.listen = listener => listeners.push(listener)
  this.unlisten = (listener) => {
    const index = listeners.indexOf(listener)
    listeners.splice(index, 1)
  }
  return this
}

export const store = new Store()

store.setState({
  title: 'jxnblk/min',
  baseurl: '/min'
})

if (typeof document !== 'undefined') {
  const init = window.__INIT || {}
  store.setState(init)
  const history = require('react-router/lib/BrowserHistory').history
  React.render(<Router routes={routes} history={history} />, document)
}

