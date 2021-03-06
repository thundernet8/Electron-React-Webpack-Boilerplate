import React, { Component }         from 'react'
import triggerAction                from '../actions'
import * as types                   from '../constants'

const defaultData = {
  name: ''
}

export default class InputName extends Component {
  constructor (props) {
      super(props)
      this.state = defaultData
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.dispatch(triggerAction(types.UPDATE_DATA, {
        name: this.state.name
    }))
    this.setState(defaultData) // 重置输入框
  }

  handleNameChange (evt) {
    this.setState({name: evt.target.value})
  }

  render () {
    return (
      <div className="inputName">
        <h2>Input your name here.</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Your name"></input>
          <input type="submit" value="Submit"></input>
        </form>
        <p>Your name is: {this.props.data.name}</p>
      </div>
    )
  }
}
