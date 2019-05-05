import React, { Component } from 'react'
import { brown, gold, red } from '../utils/colors'
import styled from 'styled-components/native'
import { TouchableHighlight, View, Animated } from 'react-native'
import { StyledText, Bold } from './styled'

const StyledCard = styled(View)`
  flex: 1;
  padding: 15px;
  border-width: 3px;
  border-radius: 6px;
  margin: 6px;
  border-color: ${gold};
  background-color: ${red};
`

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight)
const Cover = styled(AnimatedTouchable)`
  width: 100%;
  height: 50%;
  position: absolute;
  padding: 15px;
  justify-content: center;
  background-color: ${brown};
  border-width: 4px;
  border-radius: 4px;
  border-color: ${gold};
`

export default class Card extends Component {
  state = {
    bottom: new Animated.Value(0),
    opacity: new Animated.Value(1),
  }

  static getDerivedStateFromProps({ card, coverAnswer }, state) {
    if (typeof card.correctGuess === 'boolean') {
      return { ...state, opacity: new Animated.Value(0) }
    }

    if (coverAnswer) {
      return { bottom: new Animated.Value(0), opacity: new Animated.Value(1) }
    }

    return state
  }

  uncoverAnswer = () => {
    const { bottom, opacity } = this.state
    Animated.spring(bottom, { toValue: -90, duration: 4000 }).start()
    Animated.timing(opacity, { toValue: 0, duration: 800 }).start()

    this.props.onPress()
  }

  render() {
    const { card, coverAnswer, ...rest } = this.props
    const { bottom, opacity } = this.state

    return (
      <View {...rest}>
        <StyledCard>
          <StyledText style={{ flex: 1 }} center size={20} color="light">
            <Bold>Q:</Bold> {card.question}
          </StyledText>
          <StyledText
            style={{
              flex: 1,
              textAlignVertical: 'bottom',
              justifyContent: 'flex-end',
            }}
            center
            size={20}
            color="gold"
          >
            <Bold>A:</Bold> {card.answer}
          </StyledText>
        </StyledCard>

        <Cover style={{ bottom, opacity }} onPress={this.uncoverAnswer}>
          <StyledText
            style={{ fontSize: 24, justifyContent: 'center' }}
            size={18}
            color="light"
            center
            bold
          >
            Reveal the answer!
          </StyledText>
        </Cover>
      </View>
    )
  }
}
