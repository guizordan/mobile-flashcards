import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler'
import { red, gold } from '../utils/colors'
import { Bold, WhiteText } from '../components/styled'

const Container = styled(ScrollView)`
  padding: 10px 10px 0px 10px;
  flex: 1;
`

let Deck = styled(TouchableOpacity)`
  background-color: ${red};
  border-color: ${gold};
  border-width: 4px;
  border-radius: 10px;
  margin-bottom: -15px;
  border-bottom-width: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: 10px 20px 50px 20px;
  justify-content: space-between;
  flex-direction: row;
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
  // '4': {
  //   id: '4',
  //   title: 'teste 4',
  //   cards: [],
  // },
  // '5': {
  //   id: '5',
  //   title: 'teste 1',
  //   cards: [],
  // },
  // '6': {
  //   id: '6',
  //   title: 'teste 2',
  //   cards: [],
  // },
  // '7': {
  //   id: '7',
  //   title: 'teste 3',
  //   cards: [],
  // },
  // '8': {
  //   id: '9',
  //   title: 'teste 4',
  //   cards: [],
  // },
  // '9': {
  //   id: '10',
  //   title: 'teste 1',
  //   cards: [],
  // },
  // '10': {
  //   id: '11',
  //   title: 'teste 2',
  //   cards: [],
  // },
  // '11': {
  //   id: '12',
  //   title: 'teste 3',
  //   cards: [],
  // },
  // '12': {
  //   id: '13',
  //   title: 'aaaaa',
  //   cards: [],
  // },
  // '13': {
  //   id: '321',
  //   title: 'teste 1',
  //   cards: [],
  // },
  // '14': {
  //   id: '321',
  //   title: 'teste 2',
  //   cards: [],
  // },
  // '15': {
  //   id: '123',
  //   title: 'teste 3',
  //   cards: [],
  // },
  // '16': {
  //   id: '321',
  //   title: 'aaaaa',
  //   cards: [],
  // },
}

export default class Decks extends Component {
  static navigationOptions = {
    title: 'Your Decks',
  }

  goToDeck = deck => {
    this.props.navigation.navigate('Deck', { deck })
  }

  render() {
    return (
      <Container>
        {Object.values(decks).map((deck, index) => {
          if (index === Object.values(decks).length - 1) {
            Deck = styled(Deck)`
              margin-bottom: 0px;
              border-bottom-width: 4px;
            `
          }

          return (
            <Deck key={index} onPress={() => this.goToDeck(deck.id)}>
              <WhiteText>
                <Bold>{deck.title}</Bold>
              </WhiteText>
              <WhiteText>
                number of cards <Bold>{deck.cards.length}</Bold>
              </WhiteText>
            </Deck>
          )
        })}
      </Container>
    )
  }
}
