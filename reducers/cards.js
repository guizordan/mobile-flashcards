import { SET } from '../actions/cards'

const initialState = {}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET:
      return { ...state, ...{ [payload.id]: payload } }
    default:
      return state
  }
}
