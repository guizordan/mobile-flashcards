import styled from 'styled-components/native'
import { Text, View } from 'react-native'
import { white, red, brown, blue, gold } from '../utils/colors'

export const Bold = styled(Text)`
  font-weight: bold;
`
export const WhiteText = styled(Text)`
  color: ${white};
`
export const BrownText = styled(Text)`
  color: ${brown};
`

export const CenteredRow = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`

export const CenteredText = styled(Text)`
  text-align: center;
`
