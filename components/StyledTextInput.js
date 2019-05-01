import React from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { white, brown } from '../utils/colors'
import { Row, StyledText } from '../components/styled'

export default function StyledTextInput({ label, ...rest }) {
  const StyledTextInput = styled(TextInput)`
    font-size: 20;
    padding-left: 10;
    height: 60;
    border-radius: 5;
    border-color: ${white};
    background: ${brown};
    color: black;
    border-width: 1;
  `

  return (
    <View style={{ flex: 1 }}>
      <StyledText bold color="brown">
        {label}
      </StyledText>

      <StyledTextInput {...rest} />
    </View>
  )
}

StyledTextInput.propTypes = {
  label: PropTypes.string.isRequired,
}
