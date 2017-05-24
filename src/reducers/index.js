import { combineReducers } from 'redux';

import searchReducer from './SearchReducer'
// import favoriteReducer from './favoriteReducer'

const rootReducer = combineReducers({
  searchResult : searchReducer
})

export default rootReducer;