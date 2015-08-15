
import React from 'react'
import serialize from 'serialize-javascript'

export default class Root extends React.Component {

  render() {
    const { app, children, baseurl } = this.props
    console.log('Root props', this.props)

    return (
      <html>
        <title>Root</title>
        {app ? <div id='app' dangerouslySetInnerHTML={{ __html: app }} /> : false}
        {children ? <div id='app'>{children}</div> : false}
        <script dangerouslySetInnerHTML={{
          __html: `window.__INIT=${serialize({})}`
        }} />
        <script src={`${baseurl}/bundle.js`} />
      </html>
    )
  }

}

Root.defaultProps = {
  baseurl: ''
}

