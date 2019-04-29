import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'

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

const decks = {
  '1': {
    id: '1',
    title: 'teste 1',
    cards: [],
  },
  '2': {
    id: '2',
    title: 'teste 2',
    cards: [],
  },
  '3': {
    id: '3',
    title: 'teste 3',
    cards: [],
  },
  '4': {
    id: '4',
    title: 'teste 4',
    cards: [],
  },
}

export default class Decks extends Component {
  static navigationOptions = {
    title: 'Decks',
  }

  goToDeck = deck => {
    console.log('going', this.props)
    this.props.navigation.navigate('Deck', { deck })
  }

  render() {
    return (
      <Container>
        <FlatList
          data={Object.values(decks)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Deck onPress={() => this.goToDeck(item.id)}>
              <Text>{item.title}</Text>
              <Text>Number of cards {item.cards.length}</Text>
            </Deck>
          )}
        />
      </Container>
    )
  }
}
