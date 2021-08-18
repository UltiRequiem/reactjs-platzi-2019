/* eslint-disable class-methods-use-this */

import React from 'react'
import ReactDOM from 'react-dom'

class Badge extends React.Component {
  render() {
    return <h1>Hello World</h1>
  }
}

const container = document.getElementById('app')

ReactDOM.render(<Badge />, container)
