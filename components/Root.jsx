
import React from 'react'
import { assign } from 'lodash'
import serialize from 'serialize-javascript'

export default class Root extends React.Component {

  render() {
    const { children, baseurl } = this.props
    let init = assign({}, this.props)
    delete init.children

    return (
      <html>
        <title>Root</title>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `window.__INIT=${serialize(init)}`
        }} />
        <script src={`${baseurl}/bundle.js`} />
      </html>
    )
  }

}

Root.defaultProps = {
  baseurl: ''
}

