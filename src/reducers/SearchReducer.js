import {SEARCH_LIST} from '../constants/constants'
const searchReducer = (state=[], actions)=>{
  console.log(actions);
  switch (actions.type) {
    case SEARCH_LIST: return (actions.payload)
    default: return state
  }
}

export default searchReducer;