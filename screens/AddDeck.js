import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Container = styled(View)`
  padding: 10px;
  flex: 1;
`

const Deck = styled(TouchableOpacity)`
  background-color: blue;
  border-radius: 10px;
  padding: 20px;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-direction: row;
  flex: 1;
`

export default class Decks extends Component {
  render() {
    return (
      <Container>
        <Text>Add deck</Text>
      </Container>
    )
  }
}
