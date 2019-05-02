import generateId from '../utils/generateId'

import { addCardToDeck } from './decks'

export const SET = '@@cards/SET'

export function addCard({ question, answer }, deckId) {
  return dispatch => {
    const id = generateId()
    const payload = { id, question, answer, deckId }

    dispatch({
      type: SET,
      payload,
    })

    dispatch(addCardToDeck(payload))
  }
}
