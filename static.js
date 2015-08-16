
import React from 'react'
import { Router } from 'react-router'
import Location from 'react-router/lib/Location'
import { routes } from './index'
import { store } from './store'
const { baseurl } = store.getState()
console.log('static baseurl', baseurl)

export default function(path, props, callback) {
  const location = new Location(baseurl + path)
  Router.run(routes, location, (err, state) => {
    const html = React.renderToString(<Router {...state} {...props} />)
    callback(`<!DOCTYPE html>${html}`)
  })
}

