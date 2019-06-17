export function loadError(payload) {
  return (
    {type: 'LOAD_ERROR',
    payload: payload}
  )
}

export function deleteError(){
  return (
    {type: 'DELETE_ERROR'}
  )
}

export function beginBookAPIRequest(){
  return (
    {type: 'BEGIN_BOOK_API_REQUEST'}
  )
}

export function endBookAPIRequest(){
  return (
    {type: 'END_BOOK_API_REQUEST'}
  )
}
