import { combineReducers } from 'redux'

/* reducers */
import decks from './decks'
import cards from './cards'
/* reducers */

export default combineReducers({
  decks,
  cards,
})
