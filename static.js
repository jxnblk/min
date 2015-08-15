
import { assign } from 'lodash'
import React from 'react'
import { Router } from 'react-router'
import Location from 'react-router/lib/Location'
import routes from './routes'
import Root from './components/Root'
import css from 'normalize.css/normalize.css'

import data from './data'
data.setState({ css: css.toString() })
const { baseurl } = data.getState()

if (typeof window !== 'undefined') {
  require('./entry')
}

export default function render(locals, callback) {
  const location = new Location(baseurl + locals.path)
  Router.run(routes, location, (err, state) => {
    const props = assign({}, state, locals)
    const html = React.renderToString(<Router {...props} />)
    callback(null, `<!DOCTYPE html>${html}`)
  })
}

