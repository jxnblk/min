
import React from 'react'
import { Router } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import normalize from 'normalize.css'
import routes from './routes'
import data from './data'


let init = {}
if (typeof window !== 'undefined') {
  console.log('ENTRY entry data', data)
  init = window.__INIT || {}
  console.log('__INIT', init)
}

React.render(<Router {...init} children={routes} history={history} />, document)

