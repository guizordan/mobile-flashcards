import React, { Component } from 'react'
import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as colors from '../utils/colors'
import { connect } from 'react-redux'
import { StyledText, Bold } from '../components/styled'

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

  goToDeck = deckId => {
    this.props.navigation.navigate('Deck', { deckId })
  }

  render() {
    const { decks } = this.props

    return (
      <Container>
        {decks.map((deck, index) => {
          let style = {}
          if (index === Object.values(decks).length - 1) {
            style = { marginBottom: 0, borderBottomWidth: 4 }
          }

          return (
            <Deck
              key={index}
              style={style}
              onPress={() => this.goToDeck(deck.id)}
            >
              <StyledText color="white" bold>
                {deck.title}
              </StyledText>
              <StyledText color="white">
                number of cards <Bold>{deck.cards.length}</Bold>
              </StyledText>
            </Deck>
          )
        })}
      </Container>
    )
  }
}

const mapStateToProps = ({ decks }) => {
  return {
    decks: Object.values(decks),
  }
}

export default connect(mapStateToProps)(Decks)
