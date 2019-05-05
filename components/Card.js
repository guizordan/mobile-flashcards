import React from 'react'
import { brown, gold, red } from '../utils/colors'
import styled from 'styled-components/native'
import { TouchableOpacity, View } from 'react-native'
import { StyledText, Bold } from './styled'

const Card = styled(View)`
  flex: 1;
  padding: 15px;
  border-width: 3px;
  border-radius: 6px;
  margin: 6px;
  border-color: ${gold};
  background-color: ${red};
`
const Cover = styled(TouchableOpacity)`
  width: 100%;
  height: 50%;
  bottom: 0px;
  position: absolute;
  padding: 15px;
  justify-content: center;
  background-color: ${brown};
  border-width: 4px;
  border-radius: 4px;
  border-color: ${gold};
`

export default ({ onPress, card, coverAnswer, ...rest }) => {
  return (
    <View {...rest}>
      <Card>
        <StyledText style={{ flex: 1 }} center size={22} color="light">
          <Bold>Q:</Bold> {card.question}
        </StyledText>
        <StyledText style={{ flex: 1 }} center size={22} color="light">
          <Bold>A:</Bold> {card.answer}
        </StyledText>
      </Card>
      {coverAnswer && (
        <Cover onPress={onPress}>
          <StyledText
            style={{ fontSize: 24, justifyContent: 'center' }}
            size={18}
            color="light"
            center
            bold
          >
            Reveal the answer!
          </StyledText>
        </Cover>
      )}
    </View>
  )
}
