import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class NotFound extends Component {
  render() {
    return (
      <div className="404">
        <h2>404</h2>
        <p>The content you request is not found</p>
      </div>
    );
  }
}

export default NotFound
