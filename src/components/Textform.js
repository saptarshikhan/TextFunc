import React from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="Workarea" rows="8"></textarea>
    </div>
    </div>
  )
}
Textform.propTypes = {
    heading : PropTypes.string
}

Textform.defaultProps = {
    heading: "Entre your text"
}


