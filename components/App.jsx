
import React from 'react'
import { Link } from 'react-router'
import Root from './Root'

export default class App extends React.Component {

  render() {
    const { children } = this.props
    const styles = {
      root: {
        padding: 32
      }
    }
    console.log('App props', this.props)

    return (
      <Root {...this.props}>
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

