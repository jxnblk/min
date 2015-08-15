
import React from 'react'
import { assign } from 'lodash'
import serialize from 'serialize-javascript'

export default class Root extends React.Component {

  render() {
    const { children, baseurl } = this.props

    let init = assign({}, this.props)
    delete init.children
    delete init.baseurl

    init = {}

    return (
      <html>
        <head>
          <title>Root</title>
        </head>
        <body>
          {children}
          <script dangerouslySetInnerHTML={{
            __html: `window.__INIT=${serialize(init)}`
          }} />
          <script src={`${baseurl}/bundle.js`} />
        </body>
      </html>
    )
  }

}

Root.defaultProps = {
  baseurl: ''
}

