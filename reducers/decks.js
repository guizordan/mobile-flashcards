import { SET, REMOVE } from '../actions/decks'

const initialState = {}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET:
      return { ...state, ...{ [payload.id]: payload } }
    case REMOVE:
      const newState = Object.values(state).filter(deck => deck.id !== payload)
      return { ...newState }
    default:
      return state
  }
}
