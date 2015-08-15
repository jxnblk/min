
import React from 'react'
import { Router } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import normalize from 'normalize.css'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'

const routes = [
  {
    component: App,
    childRoutes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
    ]
  }
]

React.render(<Router children={routes} history={history} />, document.getElementById('app'))

