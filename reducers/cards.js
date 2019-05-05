import { SET_CARD, SET_CARDS } from '../actions/cards'

const initialState = {
  '1': {
    id: '1',
    question: 'O Leozinho eh biba',
    answer: 'mas é claro!!!',
    deckId: '1',
    correctGuess: undefined,
  },
  '2': {
    id: '2',
    question: 'o React é uma lib de requisições rest',
    answer: 'nops',
    deckId: '1',
    correctGuess: undefined,
  },
  '3': {
    id: '3',
    question: 'a mimiquinha é braba',
    answer: 'pode aposta q sim',
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
