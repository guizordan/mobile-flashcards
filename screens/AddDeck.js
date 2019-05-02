import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'
import { Row } from '../components/styled'
import Button from '../components/Button'

import { connect } from 'react-redux'
import StyledTextInput from '../components/StyledTextInput'
import { addDeck } from '../actions/decks'

const Container = styled(KeyboardAvoidingView)`
  justify-content: center;
  padding: 10px;
  flex: 1;
`

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
      <Container behavior="position" enabled>
        <Row>
          <StyledTextInput
            style={{ marginBottom: 15 }}
            value={title}
            label="Title"
            onChangeText={title => this.setState({ title })}
          />
        </Row>

        <Row>
          <Button
            disabled={!title.length}
            style={{ flex: 1 }}
            onPress={() => {
              addDeck({ title })
              this.setState({ title: '' })
            }}
          >
            Create
          </Button>
        </Row>
      </Container>
    )
  }
}

export default connect(
  null,
  { addDeck },
)(AddDeck)
