import { SET_DECK, REMOVE } from '../actions/decks'

const initialState = {
  '1': {
    id: '1',
    title: 'Deck Test',
    cards: ['1', '2', '3'],
  },
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_DECK:
      return { ...state, ...{ [payload.id]: payload } }
    case REMOVE:
      const newState = Object.values(state).filter(deck => deck.id !== payload)
      return { ...newState }
    default:
      return state
  }
}
