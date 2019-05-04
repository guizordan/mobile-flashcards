import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import * as colors from '../utils/colors'
import { StyledText } from '../components/styled'

export default ({ color, children, disabled, block, style, ...rest }) => {
  color = color || 'blue'

  const Button = styled(TouchableOpacity)`
    height: 60;
    padding: 20px;
    border-radius: 2;
    align-items: center;
    justify-content: center;
    opacity: ${disabled ? '.4' : '1'};
    background-color: ${colors[color]};
  `
  let textColor = 'white'

  switch (color) {
    case 'blue':
      textColor = 'brown'
      break
  }

  if (block) style = { ...style, flex: 1 }

  return (
    <Button {...rest} style={style} disabled={disabled}>
      <StyledText style={{ fontSize: 22 }} color={textColor} bold>
        {children}
      </StyledText>
    </Button>
  )
}
