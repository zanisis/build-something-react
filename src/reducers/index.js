import { combineReducers } from 'redux';

import searchReducer from './SearchReducer'
import trackReducer from './TrackReducer'

const rootReducer = combineReducers({
  searchResult : searchReducer,
  trackResult : trackReducer
})

export default rootReducer;