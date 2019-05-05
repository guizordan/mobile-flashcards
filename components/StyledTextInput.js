import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import { brown } from '../utils/colors'
import { Row } from './styled'

const StyledTextInputComponent = styled(TextInput)`
  flex: 1;
  font-size: 22;
  padding-left: 10;
  height: 60;
  background: white;
  color: ${brown};
  border-radius: 10px;
`

export default function StyledTextInput({ ...rest }) {
  return (
    <Row>
      <StyledTextInputComponent {...rest} />
    </Row>
  )
}
