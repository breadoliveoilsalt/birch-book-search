import { endBookAPIRequest, loadError } from './actionCreatorsAppStatus'
import { loadSearchResults, loadResultNumber } from './actionCreatorsUpdateSearchResults'
import { FetchRequest } from './fetchRequestClass'
import { BookRecord } from './bookRecordModel'

export function getBookRecordsBasicSearch(searchProperties) {

  return function(dispatch) {

    let request = new FetchRequest(searchProperties)

    return request.basicSearch()
      .then(data => {
        dispatch(endBookAPIRequest())
        dispatch(loadResultNumber(data.totalItems))
        let bookRecordsForState = createBookRecords(data.items)
        dispatch(loadSearchResults(bookRecordsForState))
      })
      .catch(error => {
        dispatch(endBookAPIRequest())
        dispatch(loadError(error.message))
      })
  }
}

///// PRIVATE FUNCTIONS

function createBookRecords(arrayOfAPIReturns) {

  let bookRecordsForState = []

  arrayOfAPIReturns.forEach( bookRecord => {
    let bookRecordForState = new BookRecord(bookRecord.volumeInfo) // argument is an object
    bookRecordsForState.push(bookRecordForState)
  })

  return bookRecordsForState

}
