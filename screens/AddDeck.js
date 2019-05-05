import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Container } from '../components/styled'
import Button from '../components/Button'

import { connect } from 'react-redux'
import StyledTextInput from '../components/StyledTextInput'
import { addDeck } from '../actions/decks'

class AddDeck extends Component {
  state = {
    title: '',
  }

  static navigationOptions = {
    title: 'Create a new deck',
  }

  render() {
    const { title } = this.state
    const { addDeck } = this.props

    return (
      <Container>
        <KeyboardAvoidingView behavior="position" enabled>
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
              addDeck({ title })
              this.setState({ title: '' })
            }}
          >
            Create
          </Button>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default connect(
  null,
  { addDeck },
)(AddDeck)
