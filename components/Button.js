import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import * as colors from '../utils/colors'
import { StyledText, Row } from '../components/styled'

const Button = styled(TouchableOpacity)`
  height: 50;
  padding: 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`

const ButtonBase = styled(TouchableOpacity)`
  height: 50;
  padding: 20px;
  margin-top: 5px;
  border-radius: 18px;
  position: absolute;
  width: 100%;
`
export default ({ color, children, disabled, block, onPress, ...rest }) => {
  color = color || 'blue'
  let textColor = 'light'
  let buttonStyles = { backgroundColor: colors[color] }
  let buttonBaseStyles = {
    opacity: disabled ? 0.4 : 1,
    backgroundColor: colors[`darker${color}`],
  }

  switch (color) {
    case 'blue':
      textColor = 'red'
      break
  }

  return (
    <Row {...rest}>
      <View>
        <ButtonBase style={buttonBaseStyles} />
        <Button style={buttonStyles} onPress={onPress} disabled={disabled}>
          <StyledText
            size="22"
            style={{ opacity: disabled ? 0.4 : 1 }}
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
