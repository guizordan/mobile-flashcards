import React, { Component } from 'react'
import { StyledText, Bold, Row, Container } from '../components/styled'
import Button from '../components/Button'
import { connect } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { setCorrectGuess, clearCardsStatus } from '../actions/cards'
import Card from '../components/Card'
import GuessSwitch from '../components/GuessSwitch'
import { NavigationEvents } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })

  state = {
    currentCard: 0,
    coverAnswer: true,
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
        coverAnswer: true,
      }
    })
  }

  previousQuestion = () => {
    this.setState(({ currentCard }) => {
      return {
        currentCard: currentCard - 1,
        coverAnswer: true,
      }
    })
  }

  finishQuiz = () => {
    const { deck, navigation } = this.props
    clearLocalNotification().then(() => {
      setLocalNotification()
      navigation.navigate('Score', { deckId: deck.id })
    })
  }

  changeCorrectGuess = (card, value) => {
    this.props.setCorrectGuess(card, value)
  }

  render() {
    const { currentCard, coverAnswer } = this.state
    const { cards } = this.props
    const card = cards[currentCard]

    return (
      <Container>
        <NavigationEvents
          onWillFocus={() =>
            this.setState({ currentCard: 0, coverAnswer: true })
          }
        />

        <Card
          style={{ flex: 3, marginBottom: 5 }}
          card={card}
          coverAnswer={coverAnswer}
          onPress={() => this.setState({ coverAnswer: false })}
        />

        <Row style={{ flex: 1 }} justify="center">
          {(!coverAnswer || typeof card.correctGuess !== 'undefined') && (
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
        <Row justify="flex-end">
          <StyledText size="14">
            Question <Bold>{currentCard + 1}</Bold> of{' '}
            <Bold>{cards.length}</Bold>
          </StyledText>
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
