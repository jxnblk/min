
import React from 'react'
import { clone } from 'lodash'
import { Link } from 'react-router'

export default class App extends React.Component {

  render() {
    const { children } = this.props
    const styles = {
      root: {
        padding: 32
      }
    }
    let props = clone(this.props)
    delete props.children

    return (
      <div style={styles.root}>
        <h1>jxnblk/min</h1>
        <p>Bare minimum React + webpack + hot loader</p>
        <nav>
          <Link to='/' children='Home' />
          <Link to='/about' children='About' />
        </nav>
        {React.cloneElement(children, this.props)}
        <pre>{JSON.stringify(props, null, '  ')}</pre>
      </div>
    )
  }
}

