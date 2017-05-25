import {SEARCH_LIST, SONG_LIST, ADD_TRACK, DELETE_TRACK, EDIT_TRACK} from '../constants/constants'
import axios from 'axios'
export const fetchMusic = searchWord => {
  return dispatch =>
    fetch(`https://api.spotify.com/v1/search?q=${searchWord}&type=track`)
    .then(res => res.json())
    .then(data => dispatch({
      type : SEARCH_LIST,
      payload : data.tracks.items
    }))
}

export const fetchFavTrack = () =>{
  return dispatch =>
  axios.get('http://localhost:4000/Track')
  .then(response => {
    return dispatch({
      type : SONG_LIST,
      payload : response.data
    })
  })
  .catch(err => console.log(err))
}

export const addFavTrack = (data)=>{
    return dispatch =>
      axios.post('http://localhost:4000/Track', data)
      .then(response => {
        return dispatch({
          type : ADD_TRACK,
          payload : data
        })
      })
      .catch(err => console.log(err))
}

export const delFavTrack = (id)=>{
    return dispatch =>
      axios.delete('http://localhost:4000/Track/'+id)
      .then(res => {
        return dispatch({
          type : DELETE_TRACK,
          payload : id
        })
      })
      .catch(err => console.log(err))
}

export const editTrack = (data)=>{
  return dispatch => {
    axios.patch('http://localhost:4000/Track/'+ data.id,{
      name : data.desc
    }).then(res => {
      return dispatch({
        type : EDIT_TRACK,
        payload : data
      })
    })
    .catch(err => console.log(err))
  }
}