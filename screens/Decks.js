import React, { Component } from 'react'
import styled from 'styled-components/native'

import { TouchableOpacity, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as colors from '../utils/colors'
import { connect } from 'react-redux'

const Container = styled(ScrollView)`
  padding: 10px 10px 0px 10px;
  flex: 1;
`

let Deck = styled(TouchableOpacity)`
  background-color: ${colors.brown};
  border-color: ${colors.gold};
  color: ${colors.blue};
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

class Decks extends Component {
  static navigationOptions = {
    title: 'Your Decks',
  }

  goToDeck = deck => {
    this.props.navigation.navigate('Deck', { deck })
  }

  render() {
    const { decks } = this.props

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
              <Text>{deck.title}</Text>
              <Text>number of cards {deck.cards.length}</Text>
            </Deck>
          )
        })}
      </Container>
    )
  }
}

const mapStateToProps = ({ decks }) => ({ decks })

export default connect(mapStateToProps)(Decks)
