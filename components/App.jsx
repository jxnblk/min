
import React from 'react'

export default class App extends React.Component {

  render() {
    const styles = {
      root: {
        padding: 32
      }
    }

    return (
      <div style={styles.root}>
        <h1>min</h1>
        <p>Bare minimum React + webpack + hot loader</p>
      </div>
    )
  }
}

