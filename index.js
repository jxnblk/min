
import React from 'react'
import { Router } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import { store } from './store'

store.setState({ title: 'jxnblk/min' })

// baseurl: '/min'

const { baseurl } = store.getState()

export const routes = [
  {
    component: App,
    childRoutes: [
      { path: baseurl + '/', component: Home },
      { path: baseurl + '/about', component: About },
    ]
  }
]

if (typeof document !== 'undefined') {
  const init = window.__INIT || {}
  store.setState(init)
  const history = require('react-router/lib/BrowserHistory').history
  React.render(<Router routes={routes} history={history} />, document)
}

