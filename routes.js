
import React from 'react'
import { Router } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'

import { assign } from 'lodash'
import data from './data'
const { baseurl } = data.getState()

const routes = [
  assign({
    component: App,
    childRoutes: [
      {
        path: baseurl.length ? baseurl : '/',
        component: Home
      },
      { path: baseurl + '/about', component: About },
    ]
  }, data.getState())
]

export default routes

