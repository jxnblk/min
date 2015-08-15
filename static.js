
import { assign } from 'lodash'
import React from 'react'
import { Router } from 'react-router'
import Location from 'react-router/lib/Location'
import serialize from 'serialize-javascript'
import routes from './routes'

if (typeof window !== 'undefined') {
  require('./entry')
}

function template(app, init) {
return `
<!DOCTYPE html>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<div id='app'>${app}</div>
<script>window.__INIT=${serialize(init)};</script>
<script src='/bundle.js'></script>
`
}

export default function render(locals, callback) {
  const location = new Location(locals.path)
  Router.run(routes, location, (err, state) => {
    const component = <Router {...state} {...locals} />
    const app = React.renderToString(component)
    const html = template(app, assign({}, state, locals))
    callback(null, html)
  })
}

