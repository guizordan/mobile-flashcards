import { generateId } from '../utils/helpers'
import NavigationService from '../services/NavigationService'

export const SET_DECK = '@@decks/SET_DECK'
export const RESET_DECKS = '@@decks/RESET_DECKS'

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
  return (dispatch, getState) => {
    let { decks } = getState()

    decks = Object.values(decks)
      .filter(deck => deck.id !== id)
      .reduce((decks, deck) => ({ ...decks, ...{ [deck.id]: deck } }), {})

    dispatch({
      type: RESET_DECKS,
      payload: decks,
    })
    NavigationService.navigate('Decks')
  }
}
