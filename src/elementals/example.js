import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function HelloMessage({ name }) {
  return <div>Hello {name}</div>
}

const APP = <HelloMessage name="Hello" />

const CONTAINER = document.getElementById('app')

ReactDOM.render(APP, CONTAINER)

HelloMessage.propTypes = {
  name: PropTypes.string,
}
