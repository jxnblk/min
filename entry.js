
import React from 'react'
import { Router } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import 'normalize.css'
import routes from './routes'
import data from './data'

const init = window.__INIT || {}

React.render(<Router init={init} routes={routes} history={history} />, document)

