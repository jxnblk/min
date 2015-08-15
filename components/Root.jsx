
import React from 'react'

export default class Root extends React.Component {

  render() {
    const { app } = this.props

    return (
      <html>
        <title>Root</title>
        <div id='app'
          dangerouslySetInnerHTML={{ __html: app }} />
        <script src='/bundle.js' />
      </html>
    )
  }

}

