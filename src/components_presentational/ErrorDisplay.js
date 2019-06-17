import React from 'react'

const ErrorDisplay = ( props ) => {

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

// needs to jump to the top where the error is.


//     errorMessage = "Yo"
//   }
//   // const errorMessage = "There was an error!"
//   //
//   // if (props.errorMessage !== "" || !props.errorMessage) {
//   //   // errorMessage = (
//   //   //   // <div className="error-display">
//   //   //   //   Something went wrong, sorry?
//   //   //   // </div>
//   //   // )
//   // }
//
//   return (
//     <div className="error-display">
//       {errorMessage}
//     </div>
//   )
//
// }

export default ErrorDisplay
