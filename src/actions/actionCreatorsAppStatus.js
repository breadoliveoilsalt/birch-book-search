import * as types from './actionTypes'

export function loadError(message) {
  return (
    {type: types.LOAD_ERROR,
    payload: message}
  )
}

export function deleteError(){
  return (
    {type: types.DELETE_ERROR}
  )
}

export function beginBookAPIRequest(){
  return (
    {type: types.BEGIN_BOOK_API_REQUEST}
  )
}

export function endBookAPIRequest(){
  return (
    {type: types.END_BOOK_API_REQUEST}
  )
}
