
import React from 'react'
import { Router } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import routes from './routes'

React.render(<Router routes={routes} history={history} />, document)

