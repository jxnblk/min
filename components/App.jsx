
import React from 'react'
import { clone } from 'lodash'
import { Link } from 'react-router'
import Root from './Root'
import { store } from '../store'

export default class App extends React.Component {

  render() {
    const { children } = this.props
    const { title, baseurl } = store.getState()
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
            <Link to={baseurl + '/'} children='Home' />
            <Link to={baseurl + '/about'} children='About' />
          </nav>
          {React.cloneElement(children, this.props)}
        </div>
      </Root>
    )
  }
}

