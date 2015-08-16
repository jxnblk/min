
import React from 'react'
import { Router } from 'react-router'
import Location from 'react-router/lib/Location'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import store from './store'

const { baseurl } = store.getState()

const routes = [
  {
    component: App,
    childRoutes: [
      { path: baseurl + '/', component: Home },
      { path: baseurl + '/about', component: About },
    ]
  }
]

if (typeof document !== 'undefined') {
  console.log('client')
  const init = window.__INIT || {}
  store.setState(init)
  const history = require('react-router/lib/BrowserHistory').history
  React.render(<Router routes={routes} history={history} />, document)
}

export default function(path, props, callback) {
  const location = new Location(baseurl + path)
  Router.run(routes, location, (err, state) => {
    const html = React.renderToString(<Router {...state} {...props} />)
    callback(`<!DOCTYPE html>${html}`)
  })
}

