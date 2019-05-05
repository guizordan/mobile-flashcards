import styled from 'styled-components/native'
import { Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import * as colors from '../utils/colors'

export const StyledText = styled(Text)`
  color: ${({ color }) => (color ? colors[color] : colors.brown)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-size: ${({ size }) => size || 18};
`

export const Row = styled(View)`
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'flex-start'};
`

export const Bold = styled(Text)`
  font-weight: bold;
`

export const Container = styled(View)`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${colors.white};
`

export const ScrollContainer = styled(ScrollView)`
  flex: 1;
  padding: 20px;
  background-color: ${colors.white};
`

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${colors.white};
`
