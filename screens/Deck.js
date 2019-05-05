import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { StyledText, Bold, Container } from '../components/styled'
import Button from '../components/Button'

import { connect } from 'react-redux'
import { removeDeck } from '../actions/decks'
import { Foundation, Ionicons } from '@expo/vector-icons'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })

  componentDidMount() {
    const { deck, navigation } = this.props
    navigation.setParams({
      title: `Deck ${deck ? deck.title : ''}`,
    })
  }

  startQuiz = () => {}

  removeDeck = ({ title, id }) => {
    Alert.alert(`Removing ${title}`, 'Are you sure?', [
      { text: 'Yes', onPress: () => this.props.removeDeck(id) },
      {
        text: 'No',
        style: 'cancel',
      },
    ])
  }

  render() {
    const { deck, navigation } = this.props

    return (
      <Container>
        <View style={{ alignItems: 'center' }}>
          <Button
            color="blue"
            disabled={!deck.cards.length}
            style={{ marginBottom: 5 }}
            onPress={() => navigation.navigate('Quiz', { deckId: deck.id })}
          >
            <Foundation size={22} name="play-circle" /> Start Quiz
          </Button>
          <StyledText center style={{ fontSize: 14, marginBottom: 30 }}>
            Number of cards: <Bold>{deck.cards.length}</Bold>
          </StyledText>
          <Button
            color="brown"
            style={{ marginBottom: 20 }}
            onPress={() => navigation.navigate('AddCard', { deckId: deck.id })}
          >
            <Ionicons size={22} name="md-add-circle-outline" /> Add a card
          </Button>
          <Button color="red" onPress={() => this.removeDeck(deck)}>
            <Foundation size={22} name="trash" /> Remove deck
          </Button>
        </View>
      </Container>
    )
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const deck = decks[navigation.state.params.deckId]

  return {
    deck: deck || { title: 'loading', cards: [] },
  }
}

export default connect(
  mapStateToProps,
  { removeDeck },
)(Deck)
