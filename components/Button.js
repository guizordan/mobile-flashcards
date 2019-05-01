import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import * as colors from '../utils/colors'
import { Bold, CenteredText, BrownText } from '../components/styled'

export default ({ onPress, color, children, ...props }) => {
  const Button = styled(TouchableOpacity)`
    height: 60px;
    padding: 20px;
    border-radius: 2px;
    background-color: ${colors[color]};
    justify-content: center;
  `

  return (
    <Button {...props}>
      <CenteredText>
        <BrownText>
          <Bold>{children}</Bold>
        </BrownText>
      </CenteredText>
    </Button>
  )
}
