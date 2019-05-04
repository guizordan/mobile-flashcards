import { SET_CARD } from '../actions/cards'

const initialState = {
  '1': {
    id: '1',
    question: 'O Leozinho eh biba',
    answer: 'mas é claro!!!',
    deckId: '1',
    correctGuess: null,
  },
  '2': {
    id: '2',
    question: 'o React é uma lib de requisições rest',
    answer: 'nops',
    deckId: '1',
    correctGuess: null,
  },
  '3': {
    id: '3',
    question: 'a mimiquinha é braba',
    answer: 'pode aposta q sim',
    deckId: '1',
    correctGuess: null,
  },
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CARD:
      return { ...state, ...{ [payload.id]: payload } }
    default:
      return state
  }
}
