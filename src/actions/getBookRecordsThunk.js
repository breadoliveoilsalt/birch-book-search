import { endBookAPIRequest, loadError } from '../actions/actionCreatorsAppStatus'
import { loadSearchResults, loadResultsNumber } from '../actions/actionCreatorsUpdateSearchResults'

export function getBookRecords(apiRequest) {

  return function(dispatch) {

    return apiRequest()
      .then(data => {
        if (data.error) {
          throw Error(data.message)
        } else if (data.resultsNumber && data.results) {
          dispatch(endBookAPIRequest())
          dispatch(loadResultsNumber(data.resultsNumber))
          dispatch(loadSearchResults(data.results))
        } else {
          throw new Error("Sorry, the data returned from the server was incomplete. Please try again.")
        }
      })
      .catch(error => {
        dispatch(endBookAPIRequest())
        let message = error.message ? error.message : "Sorry, something went wrong. Please try again."
        dispatch(loadError(message))
      })
  }
}
