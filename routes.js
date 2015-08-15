
import React from 'react'
import { Router } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'

const routes = [
  {
    component: App,
    childRoutes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
    ]
  }
]

export default routes

