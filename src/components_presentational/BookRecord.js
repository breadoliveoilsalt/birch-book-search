import React from 'react'

const BookRecord = ({ bookInfo, number }) => {

  return (

    <div className="book-record">

      <p> <span className="bold-text"> # {number} </span></p>

      { bookInfo.imageURL ? <img className="book-thumbnail" alt="" src={bookInfo.imageURL} /> : <p> <span className="bold-text">(No image Available)</span></p> }

      <p> <span className="bold-text">Title: </span> { bookInfo.title ? bookInfo.title : "Not Available"} </p>

      <p> <span className="bold-text">Author(s): </span> { bookInfo.authors ? bookInfo.authors : "Not Available"} </p>

      <p> <span className="bold-text">Publisher: </span> { bookInfo.publisher ? bookInfo.publisher : "Not Available"} </p>

      { bookInfo.additionalInfoURL ? <p><a className="bold-text" href={bookInfo.additionalInfoURL} target="_blank" rel="noopener noreferrer">Click here for more info!</a></p> : null }

    </div>
  )

}

export default BookRecord
