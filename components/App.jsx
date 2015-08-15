
import React from 'react'
import { Link } from 'react-router'
import Root from './Root'
import data from '../data'

export default class App extends React.Component {

  render() {
    const { children, route } = this.props
    const { baseurl } = data.getState()
    const styles = {
      root: {
        padding: 32
      }
    }

    return (
      <Root {...this.props}>
        <div style={styles.root}>
          <h1>jxnblk/min</h1>
          <p>Bare minimum React + webpack + hot loader</p>
          <nav>
            <Link to={baseurl + '/'} children='Home' />
            <Link to={baseurl + '/about'} children='About' />
          </nav>
          {React.cloneElement(children, this.props)}
        </div>
      </Root>
    )
  }
}

