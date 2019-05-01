import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import * as colors from '../utils/colors'
import { StyledText } from '../components/styled'

export default ({ onPress, color, children, ...props }) => {
  const Button = styled(TouchableOpacity)`
    height: 60px;
    padding: 20px;
    border-radius: 2px;
    background-color: ${colors[color]};
    justify-content: center;
    align-items: center;
    align-self: center;
  `
  let textColor = 'white'

  switch (color) {
    case 'blue':
      textColor = 'brown'
      break
  }

  return (
    <Button {...props}>
      <StyledText color={textColor} bold>
        {children}
      </StyledText>
    </Button>
  )
}
