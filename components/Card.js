import React from 'react'
import { brown, gold } from '../utils/colors'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { StyledText, Bold } from './styled'

const Card = styled(TouchableOpacity)`
  padding: 15px;
  border-width: 3px;
  border-radius: 5px;
  border-color: ${gold};
  justify-content: center;
  background-color: ${brown};
`

export default ({ onPress, card, showAnswer, ...rest }) => {
  return (
    <Card {...rest} onPress={onPress}>
      <StyledText center size={22} color="blue">
        <Bold>Q:</Bold> {card.question}
      </StyledText>
      {showAnswer && (
        <StyledText center size={22} color="white">
          <Bold>A:</Bold> {card.answer}
        </StyledText>
      )}
    </Card>
  )
}
