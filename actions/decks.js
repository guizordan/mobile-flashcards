import NavigationService from '../services/NavigationService'

export const SET = '@@decks/SET'
export const REMOVE = '@@decks/REMOVE'

export function addCardToDeck(card) {
  return (dispatch, getState) => {
    const { decks } = getState()

    let deck = decks[card.deckId]
    deck = { ...deck, cards: [...deck.cards, card.id] }

    dispatch({
      type: SET,
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
