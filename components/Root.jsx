
import React from 'react'
import { clone } from 'lodash'
import { Link } from 'react-router'
import serialize from 'serialize-javascript'
import css from 'normalize.css/normalize.css'
import { store } from '../store'

export default class Root extends React.Component {

  render() {
    const { children } = this.props
    const { title, baseurl } = store.getState()

    return (
      <html>
        <head>
          <title>{title}</title>
          <style dangerouslySetInnerHTML={{ __html: css.toString() }} />
        </head>
        <body>
          {children}
          <script dangerouslySetInnerHTML={{
            __html: `window.__INIT=${serialize(store.getState())}`
          }} />
          <script src={baseurl + '/bundle.js'} />
        </body>
      </html>
    )
  }
}

