import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { StyledText, Bold, Row } from './styled'
import styled from 'styled-components/native'
import { green, red } from '../utils/colors'

const NoButton = styled(TouchableHighlight)`
  flex: 1;
  justify-content: center;
  padding: 10px;
  background-color: ${red};
`
const YesButton = styled(TouchableHighlight)`
  flex: 1;
  justify-content: center;
  padding: 10px;
  background-color: ${green};
`

export default ({ onValueChange, card, ...rest }) => {
  const correctGuessStyle =
    typeof card.correctGuess === 'boolean' && card.correctGuess
      ? { opacity: 1 }
      : { opacity: 0.4 }
  const incorrectGuessStyle =
    typeof card.correctGuess === 'boolean' && !card.correctGuess
      ? { opacity: 1 }
      : { opacity: 0.4 }

  return (
    <View {...rest}>
      <StyledText size="16" style={{ marginBottom: 4 }}>
        Did you get it <Bold>right</Bold>?
      </StyledText>
      <Row justify="center">
        <YesButton
          style={correctGuessStyle}
          onPress={() => onValueChange(true)}
        >
          <StyledText color="white" center bold>
            YES
          </StyledText>
        </YesButton>
        <NoButton
          style={incorrectGuessStyle}
          onPress={() => onValueChange(false)}
        >
          <StyledText color="white" center bold>
            NO
          </StyledText>
        </NoButton>
      </Row>
    </View>
  )
}
