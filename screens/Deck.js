import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Bold } from '../components/styled'

const Container = styled(View)`
  padding: 10px;
  flex: 1;
`

export default class Decks extends Component {
  static navigationOptions = {
    title: 'Deck',
  }

  render() {
    return (
      <Container>
        <Text>
          <Bold>Deck title</Bold>
        </Text>
      </Container>
    )
  }
}
