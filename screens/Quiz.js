import React, { Component } from 'react'
import { View, TouchableOpacity, Switch } from 'react-native'
import styled from 'styled-components/native'
import { StyledText, Bold, Row } from '../components/styled'
import Button from '../components/Button'
import { blue, gold } from '../utils/colors'
import { connect } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { setCorrectGuess } from '../actions/cards'

const Container = styled(View)`
  justify-content: center;
  padding: 10px;
  flex: 1;
`

const Card = styled(TouchableOpacity)`
  padding: 15px;
  justify-content: center;
  border-width: 5;
  background-color: ${blue};
  border-color: ${gold};
  flex: 1;
`

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })

  state = {
    currentCard: 0,
    showingAnswer: false,
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
        showingAnswer: false,
      }
    })
  }

  previousQuestion = () => {
    this.setState(({ currentCard }) => {
      return {
        currentCard: currentCard - 1,
        showingAnswer: false,
      }
    })
  }

  toggleCard = () => {
    this.setState(({ showingAnswer }) => {
      return {
        showingAnswer: !showingAnswer,
      }
    })
  }

  changeCorrectGuess = (card, value) => {
    this.props.setCorrectGuess(card, value)
  }

  render() {
    const { currentCard, showingAnswer } = this.state
    const { cards } = this.props
    const card = cards[currentCard]

    return (
      <Container>
        <Card onPress={this.toggleCard}>
          <StyledText center size={22} color="white">
            {(showingAnswer && (
              <>
                <Bold>A:</Bold> {card.answer}
              </>
            )) || (
              <>
                <Bold>Q:</Bold> {card.question}
              </>
            )}
          </StyledText>
        </Card>
        <StyledText center>
          Tap the card to reveal the{' '}
          {(showingAnswer && <Bold>question</Bold>) || <Bold>answer</Bold>}
        </StyledText>
        <Row justify="center">
          <StyledText>
            Did you get it <Bold>right</Bold>?
          </StyledText>
          <Switch
            value={card.correctGuess}
            onValueChange={value => this.changeCorrectGuess(card, value)}
          />
          {typeof card.correctGuess === 'boolean' && card.correctGuess && (
            <StyledText color="green">yes</StyledText>
          )}
          {typeof card.correctGuess === 'boolean' && !card.correctGuess && (
            <StyledText color="red">no</StyledText>
          )}
        </Row>
        <Row justify="space-between">
          <Button
            block
            color="brown"
            onPress={this.previousQuestion}
            disabled={currentCard === 0}
          >
            <AntDesign size={22} name="caretleft" /> Previous
          </Button>
          <Button
            block
            color="brown"
            onPress={this.nextQuestion}
            style={{ marginLeft: 20 }}
            disabled={currentCard === cards.length - 1}
          >
            Next
            <AntDesign size={22} name="caretright" />
          </Button>
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
  { setCorrectGuess },
)(Quiz)
