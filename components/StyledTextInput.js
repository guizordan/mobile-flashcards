import React from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { brown, gold } from '../utils/colors'
import { StyledText } from '../components/styled'

const StyledTextInputComponent = styled(TextInput)`
  font-size: 22;
  padding-left: 10;
  height: 60;
  border-color: ${gold};
  background: ${brown};
  color: ${gold};
  border-width: 3;
`

export default function StyledTextInput({ label, ...rest }) {
  return (
    <View style={{ flex: 1 }}>
      <StyledText bold color="brown">
        {label}
      </StyledText>

      <StyledTextInputComponent {...rest} />
    </View>
  )
}

StyledTextInput.propTypes = {
  label: PropTypes.string.isRequired,
}
