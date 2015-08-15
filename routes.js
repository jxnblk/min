
import React from 'react'
import { Router } from 'react-router'
import Root from './components/Root'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'

const routes = [
  {
    component: Root,
    childRoutes: [
      {
        component: App,
        childRoutes: [
          { path: '/', component: Home },
          { path: '/about', component: About },
        ]
      }
    ]
  }
]

export default routes

