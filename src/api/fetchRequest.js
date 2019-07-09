import 'isomorphic-fetch'

class FetchRequest {

  constructor(searchProperties) {
    this.fetch = fetch
    this.searchTerms = searchProperties.searchTerms || null
  }

}

export default FetchRequest
