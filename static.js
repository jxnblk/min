
import { assign } from 'lodash'
import React from 'react'
import { Router } from 'react-router'
import Location from 'react-router/lib/Location'
import serialize from 'serialize-javascript'
import routes from './routes'
import Root from './components/Root'

if (typeof window !== 'undefined') {
  require('./entry')
}

export default function render(locals, callback) {
  const location = new Location(locals.path)
  Router.run(routes, location, (err, state) => {
    const app = React.renderToString(<Router {...state} {...locals} />)
    const html = React.renderToStaticMarkup(<Root app={app} />)
    callback(null, `<!DOCTYPE html>${html}`)
  })
}

