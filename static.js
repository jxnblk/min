
import { assign } from 'lodash'
import React from 'react'
import { Router } from 'react-router'
import Location from 'react-router/lib/Location'
import routes from './routes'
import Root from './components/Root'
import data from './data'

if (typeof window !== 'undefined') {
  require('./entry')
}

export default function render(locals, callback) {
  const location = new Location(locals.path)
  Router.run(routes, location, (err, state) => {
    const props = assign({}, state, locals)
    const app = React.renderToString(<Router {...props} />)
    const html = React.renderToStaticMarkup(<Root app={app} {...data} />)
    callback(null, `<!DOCTYPE html>${html}`)
  })
}

