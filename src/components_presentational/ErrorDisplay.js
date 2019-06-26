import React from 'react'

const ErrorDisplay = (props) => {

  if (props.errorMessage) {
    return (
      <div className="error-display">
        {props.errorMessage}
      </div>
    )
  } else {
    return null
  }

}

export default ErrorDisplay
