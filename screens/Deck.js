import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Row, StyledText, Bold } from '../components/styled'
import Button from '../components/Button'

import { connect } from 'react-redux'

const Container = styled(View)`
  justify-content: center;
  padding: 10px;
  flex: 1;
`

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

  removeDeck = () => {}

  render() {
    const { deck, navigation } = this.props
    return (
      <Container>
        <StyledText style={{ fontSize: 18 }}>
          Number of cards: <Bold>{deck.cards.length}</Bold>
        </StyledText>
        <Row style={{ marginBottom: 30 }} justify="center">
          <Button style={{ flex: 1 }} color="blue" onPress={this.startQuiz}>
            Start Quiz
          </Button>
        </Row>
        <Row justify="center">
          <Button color="brown" onPress={() => navigation.navigate('AddCard')}>
            Add a card
          </Button>
          <Button
            color="red"
            style={{ marginLeft: 10 }}
            onPress={this.removeDeck}
          >
            Remove deck
          </Button>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const deck = decks[navigation.state.params.deckId]
  return {
    deck,
  }
}

export default connect(mapStateToProps)(Deck)
