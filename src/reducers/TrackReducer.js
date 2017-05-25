import {ADD_TRACK, DELETE_TRACK} from '../constants/constants'

const initialize = []

const addMyTrack = (state, data)=>{
  let newData = [...state, data]
  return newData
}

const trackReducer = (state=initialize, action)=>{
  switch (action.type) {
    case ADD_TRACK: return addMyTrack(state, action.payload)
    case DELETE_TRACK: return state
    default: return state

  }
}

export default trackReducer