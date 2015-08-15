
import React from 'react'
import { clone } from 'lodash'
import { Link } from 'react-router'
import Root from './Root'
import { store } from '../index'

export default class App extends React.Component {

  render() {
    const { children } = this.props
    const { title } = store.getState()
    const styles = {
      root: {
        padding: 32
      }
    }

    return (
      <Root {...this.props}>
        <div style={styles.root}>
          <h1>{title}</h1>
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

