import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import styles from '../styles/App.css'

class App extends Component {
  render () {
    var linkStyle = {
      padding: 5,
      lineHeight: 2
    }
    return (
      <div>
        <ul className="nav">
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/input" style={linkStyle}>Input</Link>
          <Link to="/about" style={linkStyle}>About</Link>
        </ul>
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

// Redux connection

// Which props to inject from the global atomic state
export default connect((state) => {
  return {
    data: state.mainReducer // see renderer/index.js line19-
  }
})(App)
