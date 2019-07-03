import React from 'react'

const ErrorDisplay = ({ errorMessage }) => {

  if (errorMessage) {
    return (
      <div className="error-display">
        {errorMessage}
      </div>
    )
  } else {
    return null
  }

}

export default ErrorDisplay
