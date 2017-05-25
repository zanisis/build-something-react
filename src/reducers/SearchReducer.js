import {SEARCH_LIST} from '../constants/constants'
const searchReducer = (state=[], actions)=>{
  switch (actions.type) {
    case SEARCH_LIST: return (actions.payload)
    default: return state
  }
}

export default searchReducer;