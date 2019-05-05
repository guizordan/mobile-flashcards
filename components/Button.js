import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import * as colors from '../utils/colors'
import { StyledText, Row } from '../components/styled'

export default ({ color, children, disabled, block, onPress, ...rest }) => {
  color = color || 'blue'

  const Button = styled(TouchableOpacity)`
    height: 50;
    padding: 20px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${colors[color]};
  `

  const ButtonBase = styled(TouchableOpacity)`
    height: 50;
    padding: 20px;
    margin-top: 5px;
    border-radius: 18px;
    position: absolute;
    width: 100%;
    opacity: ${disabled ? '.4' : '1'};
    background-color: ${colors[`darker${color}`]};
  `
  let textColor = 'light'

  switch (color) {
    case 'blue':
      textColor = 'red'
      break
  }

  return (
    <Row {...rest}>
      <View>
        <ButtonBase />
        <Button onPress={onPress} disabled={disabled}>
          <StyledText
            style={{ fontSize: 22, opacity: disabled ? 0.4 : 1 }}
            color={textColor}
            bold
          >
            {children}
          </StyledText>
        </Button>
      </View>
    </Row>
  )
}
