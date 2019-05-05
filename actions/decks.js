import generateId from '../utils/generateId'
import NavigationService from '../services/NavigationService'

export const SET_DECK = '@@decks/SET_DECK'
export const REMOVE = '@@decks/REMOVE'

export function createDeck(deck) {
  return dispatch => {
    deck = { ...deck, cards: [], id: generateId() }

    dispatch({
      type: SET_DECK,
      payload: deck,
    })

    NavigationService.navigate('Deck', { deckId: deck.id })
  }
}

export function addCardToDeck(card) {
  return (dispatch, getState) => {
    const { decks } = getState()

    let deck = decks[card.deckId]
    deck = { ...deck, cards: [...deck.cards, card.id] }

    dispatch({
      type: SET_DECK,
      payload: deck,
    })
  }
}

export function removeDeck(id) {
  return dispatch => {
    dispatch({
      type: REMOVE,
      payload: id,
    })
    NavigationService.navigate('Decks')
  }
}
