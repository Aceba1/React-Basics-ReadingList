import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.text.isRequired
}

export default Button

