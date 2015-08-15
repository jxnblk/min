
import React from 'react'
import { Router } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import normalize from 'normalize.css'
import routes from './routes'
import data from './data'

React.render(<Router children={routes} history={history} />, document.getElementById('app'))

