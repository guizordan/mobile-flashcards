import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components/native'
import {
  StyledText,
  Bold,
  Row,
  Container,
  ScrollContainer,
} from '../components/styled'

import { TouchableOpacity, View } from 'react-native'
import Button from '../components/Button'

import * as colors from '../utils/colors'

let Deck = styled(TouchableOpacity)`
  background-color: ${colors.brown};
  border-color: ${colors.red};
  border-width: 4;
  border-radius: 10;
  margin-bottom: -15;
  border-bottom-width: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
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
    const { decks, navigation } = this.props
    if (decks.length === 0) {
      return (
        <Container>
          <View>
            <StyledText style={{ marginBottom: 20 }} center bold>
              You are out of decks.
            </StyledText>
            <Row justify="center">
              <StyledText style={{ alignSelf: 'center' }}>
                Do you wish to
              </StyledText>
              <Button
                color="brown"
                style={{ marginLeft: 10, marginRight: 10 }}
                onPress={() => navigation.navigate('CreateDeck')}
              >
                Create a deck
              </Button>
              <StyledText style={{ alignSelf: 'center' }}>?</StyledText>
            </Row>
          </View>
        </Container>
      )
    } else {
      return (
        <ScrollContainer style={{ paddingBottom: 0 }}>
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
                <StyledText color="light" bold>
                  {deck.title}
                </StyledText>
                <StyledText color="light">
                  number of cards <Bold>{deck.cards.length}</Bold>
                </StyledText>
              </Deck>
            )
          })}
        </ScrollContainer>
      )
    }
  }
}

const mapStateToProps = ({ decks }) => {
  return {
    decks: Object.values(decks),
  }
}

export default connect(mapStateToProps)(Decks)
