import { endBookAPIRequest, loadError } from '../actions/actionCreatorsAppStatus'
import { loadSearchResults, loadResultsNumber } from '../actions/actionCreatorsUpdateSearchResults'

export function getBookRecordsBasicSearch( {request, ModelToReturn} ) {

  return function(dispatch) {

    return request()
      .then(data => {
        if (data.error) {
          throw Error(data.message)
        } else {
          dispatch(endBookAPIRequest())
          dispatch(loadResultsNumber(data.totalItems))
          let bookRecordsForState = createBookRecords(data.items)
          dispatch(loadSearchResults(bookRecordsForState))
        }
      })
      .catch(error => {
        dispatch(endBookAPIRequest())
        let message = error.message ? error.message : "Sorry, something went wrong. Please try again."
        dispatch(loadError(message))
      })
  }

  function createBookRecords(arrayOfAPIReturns) {

    let bookRecordsForState = []

    arrayOfAPIReturns.forEach( bookRecord => {
      let bookRecordForState = new ModelToReturn(bookRecord.volumeInfo)
      bookRecordsForState.push(bookRecordForState)
    })

    return bookRecordsForState

  }

}
