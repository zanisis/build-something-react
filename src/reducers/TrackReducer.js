import {SONG_LIST, ADD_TRACK, DELETE_TRACK} from '../constants/constants'

const initialize = []

const songList = (data)=>{
  return data
}

const addMyTrack = (state, data)=>{
  let newData = [...state, data]
  return newData
}

const deleteMyTrack = (state, id)=>{
  let oldState = [...state]
  let newData = oldState.filter(data=>(
    data.id !== id
  ))
  return newData
}

const trackReducer = (state=initialize, action)=>{
  switch (action.type) {
    case SONG_LIST: return songList(action.payload)
    case ADD_TRACK: return addMyTrack(state, action.payload)
    case DELETE_TRACK: return deleteMyTrack(state, action.payload)
    default: return state
  }
}

export default trackReducer