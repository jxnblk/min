
import React from 'react'
import { assign } from 'lodash'
import serialize from 'serialize-javascript'
import data from '../data'

export default class Root extends React.Component {

  render() {
    const { children } = this.props
    const { baseurl, css } = data.getState()

    return (
      <html>
        <head>
          <title>Root</title>
          <style dangerouslySetInnerHTML={{
            __html: css
          }} />
        </head>
        <body>
          {children}
          <script dangerouslySetInnerHTML={{
            __html: `window.__INIT=${serialize(data.getState())}`
          }} />
          <script src={`${baseurl}/bundle.js`} />
        </body>
      </html>
    )
  }

}

Root.defaultProps = {
  baseurl: '',
  css: ''
}

