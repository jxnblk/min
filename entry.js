
import React from 'react'
import { Router } from 'react-router'
// import { history } from 'react-router/lib/BrowserHistory'
import Location from 'react-router/lib/Location'
import Root from './components/Root'
import Home from './components/Home'
import About from './components/About'

const routes = [
  {
    component: Root,
    childRoutes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
    ]
  }
]

export default function(path, props, callback) {
  const location = new Location(path)
  Router.run(routes, location, (err, state) => {
    const html = React.renderToString(<Router {...state} {...props} />)
    callback(`<!DOCTYPE html>${html}`)
  })
}

if (typeof document !== 'undefined') {
  var history = require('react-router/lib/BrowserHistory').history
  React.render(<Router routes={routes} history={history} />, document)
}

