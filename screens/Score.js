import React, { Component } from 'react'
import { StyledText, Bold, Row, Container } from '../components/styled'
import Button from '../components/Button'
import { connect } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { clearCardsStatus } from '../actions/cards'

class Score extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })

  componentDidMount() {
    const { deck, navigation } = this.props
    navigation.setParams({
      title: `${deck ? deck.title : ''} score`,
    })
  }

  backToDeck = () => {
    const { navigation, deck, clearCardsStatus } = this.props
    clearCardsStatus(deck.id)
    navigation.navigate('Deck', { deckId: deck.id })
  }

  restartQuiz = () => {
    const { navigation, deck, clearCardsStatus } = this.props
    clearCardsStatus(deck.id)
    navigation.navigate('Quiz', { deckId: deck.id })
  }

  render() {
    const { score, totalQuestions } = this.props

    return (
      <Container>
        <StyledText size="26" bold>
          Quiz finished!
        </StyledText>
        <StyledText style={{ marginBottom: 20 }}>
          You scored <Bold>{score}</Bold> out of <Bold>{totalQuestions}</Bold>{' '}
          questions!
        </StyledText>
        <Row justify="space-between">
          <Button color="brown" onPress={this.backToDeck}>
            Back to Deck
          </Button>
          <Button
            style={{ marginLeft: 20 }}
            color="blue"
            onPress={this.restartQuiz}
          >
            Restart Quiz
          </Button>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ decks, cards }, { navigation }) => {
  const deck = decks[navigation.state.params.deckId]
  const deckCards = Object.values(cards).filter(card => card.deckId === deck.id)

  const totalQuestions = deckCards.length
  const score = deckCards.filter(card => card.correctGuess === true).length

  return {
    deck,
    score,
    totalQuestions,
  }
}

export default connect(
  mapStateToProps,
  { clearCardsStatus },
)(Score)
