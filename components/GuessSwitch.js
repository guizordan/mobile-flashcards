import React from 'react'
import { Switch, View } from 'react-native'
import { StyledText, Bold, Row } from './styled'

export default ({ onValueChange, card, ...rest }) => {
  return (
    <View {...rest}>
      <StyledText>
        Did you get it <Bold>right</Bold>?
      </StyledText>
      <Row justify="center">
        <Switch value={card.correctGuess} onValueChange={onValueChange} />
        {typeof card.correctGuess === 'boolean' && card.correctGuess && (
          <StyledText color="green" bold>
            yes
          </StyledText>
        )}
        {typeof card.correctGuess === 'boolean' && !card.correctGuess && (
          <StyledText color="red" bold>
            no
          </StyledText>
        )}
      </Row>
    </View>
  )
}
