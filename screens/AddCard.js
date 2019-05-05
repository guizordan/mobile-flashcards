import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyledText, Bold, Container } from '../components/styled'
import Button from '../components/Button'

import { connect } from 'react-redux'
import StyledTextInput from '../components/StyledTextInput'
import { addCard } from '../actions/cards'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  static navigationOptions = {
    title: 'Add a new card',
  }

  componentDidMount() {}

  render() {
    const { answer, question } = this.state
    const { addCard, deck } = this.props

    return (
      <Container>
        <KeyboardAvoidingView behavior="position" enabled>
          <StyledText style={{ marginBottom: 10 }} center>
            Adding a new card to <Bold>{deck.title}</Bold>
          </StyledText>

          <StyledTextInput
            style={{ marginBottom: 15 }}
            value={question}
            placeholder="Question"
            onChangeText={question => this.setState({ question })}
          />
          <StyledTextInput
            style={{ marginBottom: 15 }}
            value={answer}
            placeholder="Answer"
            onChangeText={answer => this.setState({ answer })}
          />

          <Button
            justify="center"
            disabled={!question || !answer}
            onPress={() => addCard({ question, answer }, deck.id)}
          >
            Add Card
          </Button>
        </KeyboardAvoidingView>
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

export default connect(
  mapStateToProps,
  { addCard },
)(AddCard)
