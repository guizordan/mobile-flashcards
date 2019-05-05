import React, { Component } from 'react'
import Button from '../components/Button'
import { KeyboardAvoidingContainer } from '../components/styled'
import { connect } from 'react-redux'
import StyledTextInput from '../components/StyledTextInput'
import { createDeck } from '../actions/decks'

class CreateDeck extends Component {
  state = {
    title: '',
  }

  static navigationOptions = {
    title: 'Create a new deck',
  }

  render() {
    const { title } = this.state
    const { createDeck } = this.props

    return (
      <KeyboardAvoidingContainer behavior="position" enabled>
        <StyledTextInput
          style={{ marginBottom: 15 }}
          value={title}
          placeholder="Title"
          onChangeText={title => this.setState({ title })}
        />

        <Button
          justify="center"
          disabled={!title}
          onPress={() => {
            createDeck({ title })
            this.setState({ title: '' })
          }}
        >
          Create Deck
        </Button>
      </KeyboardAvoidingContainer>
    )
  }
}

export default connect(
  null,
  { createDeck },
)(CreateDeck)
