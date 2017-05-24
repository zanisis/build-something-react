import {SEARCH_LIST} from '../constants/constants'

export const fetchMusic = searchWord => {
  return dispatch =>
    fetch(`https://api.spotify.com/v1/search?q=${searchWord}&type=track`)
    .then(res => res.json())
    .then(data => dispatch({
      type : SEARCH_LIST,
      payload : data.tracks.items
    }))
}