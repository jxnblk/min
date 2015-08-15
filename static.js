
import React from 'react'
import { Router } from 'react-router'
import Location from 'react-router/lib/Location'
import { routes } from './index'

export default function(path, props, callback) {
  const location = new Location(path)
  Router.run(routes, location, (err, state) => {
    const html = React.renderToString(<Router {...state} {...props} />)
    callback(`<!DOCTYPE html>${html}`)
  })
}

