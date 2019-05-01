import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Row, StyledText, Bold } from '../components/styled'
import Button from '../components/Button'

import { connect } from 'react-redux'
import FloatingLabelInput from '../components/FloatingLabelInput'

const Container = styled(View)`
  justify-content: center;
  padding: 10px;
  flex: 1;
`

class AddCard extends Component {
  static navigationOptions = {
    title: 'Add a new card',
  }

  componentDidMount() {}

  render() {
    const { answer, question } = this.state
    return (
      <Container>
        <FloatingLabelInput
          value={answer}
          onChangeText={answer => this.setState({ answer })}
        />
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

export default connect(mapStateToProps)(AddCard)
