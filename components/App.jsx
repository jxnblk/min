
import React from 'react'
import { Link } from 'react-router'
import Root from './Root'

export default class App extends React.Component {

  render() {
    const { children, route } = this.props
    const styles = {
      root: {
        padding: 32
      }
    }

    return (
      <Root {...this.props} baseurl={route.baseurl}>
        <div style={styles.root}>
          <h1>jxnblk/min</h1>
          <p>Bare minimum React + webpack + hot loader</p>
          <nav>
            <Link to='/' children='Home' />
            <Link to='/about' children='About' />
          </nav>
          {React.cloneElement(children, this.props)}
        </div>
      </Root>
    )
  }
}

