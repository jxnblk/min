
import React from 'react'
import { clone } from 'lodash'
import { Link } from 'react-router'
import css from 'normalize.css/normalize.css'

export default class Root extends React.Component {

  render() {
    const { children } = this.props

    return (
      <html>
        <head>
          <title>jxnblk/min</title>
          <style dangerouslySetInnerHTML={{ __html: css.toString() }} />
        </head>
        <body>
          <h1>jxnblk/min</h1>
          <p>Bare minimum React + webpack + hot loader</p>
          <nav>
            <Link to='/' children='Home' />
            <Link to='/about' children='About' />
          </nav>
          {React.cloneElement(children, this.props)}
          <script src='bundle.js' />
        </body>
      </html>
    )
  }
}

