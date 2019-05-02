export const SET = '@@decks/SET'

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
