import React, { Component }             from 'react'

export default class HomePage extends Component {
  render () {
    return (
      <div className="home">
        <h2>Hello, Electron & React</h2>
        <p>Welcome... {this.props.data.name}</p>
      </div>
    )
  }
}
