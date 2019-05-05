import React, { Component } from 'react'
import { StyledText, Bold, Row, Container } from '../components/styled'
import Button from '../components/Button'
import { connect } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { setCorrectGuess, clearCardsStatus } from '../actions/cards'
import Card from '../components/Card'
import GuessSwitch from '../components/GuessSwitch'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })

  state = {
    currentCard: 0,
    showAnswer: false,
  }

  componentDidMount() {
    const { deck, navigation } = this.props
    navigation.setParams({
      title: `${deck ? deck.title : ''} quiz`,
    })
  }

  nextQuestion = () => {
    this.setState(({ currentCard }) => {
      return {
        currentCard: currentCard + 1,
        showAnswer: false,
      }
    })
  }

  previousQuestion = () => {
    this.setState(({ currentCard }) => {
      return {
        currentCard: currentCard - 1,
        showAnswer: false,
      }
    })
  }

  finishQuiz = () => {
    const { clearCardsStatus, deck, navigation } = this.props
    clearCardsStatus(deck.id)
    navigation.navigate('Deck')
  }

  changeCorrectGuess = (card, value) => {
    this.props.setCorrectGuess(card, value)
  }

  render() {
    const { currentCard, showAnswer } = this.state
    const { cards } = this.props
    const card = cards[currentCard]

    return (
      <Container>
        <Card
          style={{ flex: 2, marginBottom: 5 }}
          card={card}
          showAnswer={showAnswer}
          onPress={() => this.setState({ showAnswer: true })}
        />

        <StyledText style={{ marginBottom: 20 }} size="12" center>
          Tap the card to reveal the <Bold>answer</Bold>
        </StyledText>

        <Row style={{ flex: 1 }} justify="center">
          {showAnswer && (
            <GuessSwitch
              card={card}
              onValueChange={value => this.changeCorrectGuess(card, value)}
            />
          )}
        </Row>

        <Row style={{ flex: 1 }} justify="space-between">
          <Button
            color="brown"
            onPress={this.previousQuestion}
            disabled={currentCard === 0}
          >
            <AntDesign size={22} name="caretleft" /> Previous
          </Button>
          {(currentCard === cards.length - 1 && (
            <Button
              color="blue"
              onPress={this.finishQuiz}
              style={{ marginLeft: 20 }}
            >
              Finish Quiz!
            </Button>
          )) || (
            <Button
              color="brown"
              onPress={this.nextQuestion}
              style={{ marginLeft: 20 }}
            >
              Next
              <AntDesign size={22} name="caretright" />
            </Button>
          )}
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ decks, cards }, { navigation }) => {
  const deck = decks[navigation.state.params.deckId]
  const deckCards = Object.values(cards).filter(card => card.deckId === deck.id)

  return {
    deck,
    cards: deckCards,
  }
}

export default connect(
  mapStateToProps,
  { setCorrectGuess, clearCardsStatus },
)(Quiz)
