import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import * as colors from '../utils/colors'
import { StyledText } from '../components/styled'

export default ({ color, children, ...rest }) => {
  color = color || 'blue'

  const Button = styled(TouchableOpacity)`
    height: 60px;
    border-radius: 2px;
    padding: 20px;
    background-color: ${colors[color]};
    align-items: center;
    justify-content: center;
  `
  let textColor = 'white'

  switch (color) {
    case 'blue':
      textColor = 'brown'
      break
  }

  return (
    <Button {...rest}>
      <StyledText style={{ fontSize: 22 }} color={textColor} bold>
        {children}
      </StyledText>
    </Button>
  )
}
