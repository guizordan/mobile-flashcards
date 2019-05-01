import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { CenteredRow } from '../components/styled'
import { blue } from '../utils/colors'

import { MaterialIcons } from '@expo/vector-icons'
import Button from '../components/Button'

const Container = styled(View)`
  padding: 50px;
  justify-content: center;
  flex: 1;
`

export default class Decks extends Component {
  static navigationOptions = {
    title: 'Deck',
  }

  startQuiz = () => {}

  addCardToDeck = () => {}

  render() {
    return (
      <Container>
        <CenteredRow>
          <Button color="blue" onPress={this.startQuiz}>
            Start Quiz
          </Button>
          <Button
            color="gold"
            style={{ marginLeft: 10 }}
            onPress={this.addCardToDeck}
          >
            <MaterialIcons size={18} name="library-add" />
          </Button>
        </CenteredRow>
      </Container>
    )
  }
}
