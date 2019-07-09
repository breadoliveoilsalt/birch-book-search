import { endBookAPIRequest, loadError } from '../actions/actionCreatorsAppStatus'
import { loadSearchResults, loadResultsNumber } from '../actions/actionCreatorsUpdateSearchResults'

export function getBookRecordsBasicSearch({ request, ModelToReturn }) {

  return function(dispatch) {

    return request()
      .then(data => {
        if (data.error) {
          throw Error(data.message)
        } else {
          dispatch(endBookAPIRequest())
          dispatch(loadResultsNumber(data.resultsNumber))
          // let bookRecordsForState = createBookRecords(data.items)
          dispatch(loadSearchResults(data.books))
          // dispatch(loadSearchResults(bookRecordsForState))
        }
      })
      .catch(error => {
        dispatch(endBookAPIRequest())
        let message = error.message ? error.message : "Sorry, something went wrong. Please try again."
        dispatch(loadError(message))
      })
  }

}
