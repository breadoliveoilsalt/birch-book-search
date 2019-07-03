import React from 'react'

const JumpToTopButton = ({ resultsNumber, jumpToTop }) => {

  if (resultsNumber > 0) {
    return (
      <input id="jump-to-top-button" type="submit" onClick={jumpToTop} value="Jump To Top" />
    )
  } else {
    return null
  }

}

export default JumpToTopButton
