import { endBookAPIRequest, loadError } from './actionCreatorsAppStatus'
import { loadSearchResults, loadResultNumber } from './actionCreatorsUpdateSearchResults'

export function getBookRecordsBasicSearch(request, ModelToReturn) {

  return function(dispatch) {

    return request()
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

  function createBookRecords(arrayOfAPIReturns) {

    let bookRecordsForState = []

    arrayOfAPIReturns.forEach( bookRecord => {
      let bookRecordForState = new ModelToReturn(bookRecord.volumeInfo)
      bookRecordsForState.push(bookRecordForState)
    })

    return bookRecordsForState

  }

}
