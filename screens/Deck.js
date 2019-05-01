import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Row } from '../components/styled'
import { blue } from '../utils/colors'

import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import Button from '../components/Button'

const Container = styled(View)`
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
        <Row justify="center">
          <Button color="blue" onPress={this.startQuiz}>
            {/* <AntDesign size={22} name="caretright" /> */}
            Start Quiz
          </Button>
          <Button
            color="brown"
            style={{ marginLeft: 10 }}
            onPress={this.addCardToDeck}
          >
            {/* <MaterialIcons size={22} name="library-add" />  */}
            Add card
          </Button>
        </Row>
      </Container>
    )
  }
}
