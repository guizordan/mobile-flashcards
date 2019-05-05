import generateId from '../utils/generateId'

import { addCardToDeck } from './decks'
import NavigationService from '../services/NavigationService'

export const SET_CARD = '@@cards/SET_CARD'
export const SET_CARDS = '@@cards/SET_CARDS'

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
  return {
    type: SET_CARD,
    payload,
  }
}

export function clearCardsStatus(deckId) {
  return (dispatch, getState) => {
    let { cards } = getState()

    cards = Object.values(cards)
      .filter(card => card.deckId === deckId)
      .map(card => ({ [card.id]: { ...card, correctGuess: null } }))
      .reduce((cards, card) => ({ ...cards, ...card }), {})

    dispatch({
      type: SET_CARDS,
      payload: cards,
    })
  }
}
