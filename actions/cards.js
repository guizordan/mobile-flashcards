import generateId from '../utils/generateId'

import { addCardToDeck } from './decks'
import NavigationService from '../services/NavigationService'

export const SET_CARD = '@@cards/SET'

export function addCard({ question, answer }, deckId) {
  return dispatch => {
    const id = generateId()
    const payload = { id, question, answer, deckId }

    dispatch({
      type: SET_CARD,
      payload,
    })

    dispatch(addCardToDeck(payload))

    NavigationService.navigate('Deck', { deckId })
  }
}

export function setCorrectGuess(
  { id, question, answer, deckId },
  correctGuess,
) {
  const payload = { id, question, answer, deckId, correctGuess }
  console.log('payloaddddddddddd', payload)

  return {
    type: SET_CARD,
    payload,
  }
}
