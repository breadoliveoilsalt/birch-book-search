import React from 'react'

import SmallDivider from './SmallDivider'

const BookRecord = ({ bookInfo }) => {

  return (

    <div>

      { bookInfo.imageURL ? <img class="book-thumbnail" src={bookInfo.imageURL} /> : <p> <span className="bold-text">(No image Available)</span></p> }

      <p> <span className="bold-text">Title: </span> { bookInfo.title ? bookInfo.title : "Not Available"} </p>

      <p> <span className="bold-text">Author(s): </span> { bookInfo.authors ? bookInfo.authors : "Not Available"} </p>

      <p> <span className="bold-text">Publisher: </span> { bookInfo.publisher ? bookInfo.publisher : "Not Available"} </p>

      { bookInfo.additionalInfoURL ? <p><a className="bold-text" href={bookInfo.additionalInfoURL} target="_blank">Click here for more info!</a></p> : null }

      <SmallDivider />

    </div>
  )

}

export default BookRecord
