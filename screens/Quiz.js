import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Row, StyledText, Bold } from '../components/styled'
import Button from '../components/Button'

import { connect } from 'react-redux'

const Container = styled(View)`
  justify-content: center;
  padding: 10;
  flex: 1;
`

const Card = styled(View)`
  padding: 15;
  background-color: ${blue};
`

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })

  componentDidMount() {
    const { deck, navigation } = this.props
    navigation.setParams({
      title: `${deck ? deck.title : ''} quiz`,
    })
  }

  render() {
    const { deck, navigation } = this.props

    return (
      <Container>
        <StyledText style={{ fontSize: 18 }}>
          Number of cards: <Bold>{deck.cards.length}</Bold>
        </StyledText>
      </Container>
    )
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const deck = decks[navigation.state.params.deckId]

  return {
    deck: deck || { title: 'loading', cards: [] },
  }
}

export default connect(mapStateToProps)(Quiz)
