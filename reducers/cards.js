import { SET_CARD, SET_CARDS } from '../actions/cards'

const initialState = {
  '1': {
    id: '1',
    question:
      'Is React a lightweight JavaScript library for building REST API applications?',
    answer: 'No. It is a JavaScript library for building user interfaces.',
    deckId: '1',
    correctGuess: undefined,
  },
  '2': {
    id: '2',
    question: 'What is the capital of Brasil?',
    answer: 'Brasília',
    deckId: '1',
    correctGuess: undefined,
  },
  '3': {
    id: '3',
    question: 'Behind Blue Eyes is a song composed by which band?',
    answer: 'The Who.',
    deckId: '1',
    correctGuess: undefined,
  },
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CARDS:
      return { ...state, ...payload }
    case SET_CARD:
      return { ...state, ...{ [payload.id]: payload } }
    default:
      return state
  }
}
