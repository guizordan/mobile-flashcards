import styled from 'styled-components/native'
import { Text, View } from 'react-native'
import * as colors from '../utils/colors'

export const StyledText = styled(Text)`
  color: ${({ color }) => (color ? colors[color] : colors.brown)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`

export const Row = styled(View)`
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
`
