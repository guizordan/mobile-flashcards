import { SET } from '../actions/decks'

const initialState = {
  '1': {
    id: '1',
    title: 'teste 1',
    cards: [],
  },
  '2': {
    id: '2',
    title: 'teste 2',
    cards: [],
  },
  '3': {
    id: '3',
    title: 'teste 3',
    cards: [],
  },
  '4': {
    id: '4',
    title: 'teste 4',
    cards: [],
  },
  '5': {
    id: '5',
    title: 'teste 1',
    cards: [],
  },
  '6': {
    id: '6',
    title: 'teste 2',
    cards: [],
  },
  '7': {
    id: '7',
    title: 'teste 3',
    cards: [],
  },
  '8': {
    id: '9',
    title: 'teste 4',
    cards: [],
  },
  '9': {
    id: '10',
    title: 'teste 1',
    cards: [],
  },
  '10': {
    id: '11',
    title: 'teste 2',
    cards: [],
  },
  '11': {
    id: '12',
    title: 'teste 3',
    cards: [],
  },
  '12': {
    id: '13',
    title: 'aaaaa',
    cards: [],
  },
  '13': {
    id: '321',
    title: 'teste 1',
    cards: [],
  },
  '14': {
    id: '321',
    title: 'teste 2',
    cards: [],
  },
  '15': {
    id: '123',
    title: 'teste 3',
    cards: [],
  },
  '16': {
    id: '321',
    title: 'aaaaa',
    cards: [],
  },
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET:
      return { ...state, ...payload }
    default:
      return state
  }
}
