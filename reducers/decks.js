import { SET_DECK, RESET_DECKS } from '../actions/decks'

const initialState = {
  '1': {
    id: '1',
    title: 'Sample Deck',
    cards: ['1', '2', '3'],
  },
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case RESET_DECKS:
      return payload
    case SET_DECK:
      return { ...state, ...{ [payload.id]: payload } }
    default:
      return state
  }
}
