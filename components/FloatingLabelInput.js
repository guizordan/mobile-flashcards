import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  }

  handleFocus = () => this.setState({ isFocused: true })
  handleBlur = () => this.setState({ isFocused: false })

  render() {
    const { label, valid, ...rest } = this.props
    const isLabelPushed = !!(this.state.isFocused || this.props.value)

    const StyledTextInput = styled(TextInput)`
      font-size: 20;
      padding-left: 10;
      padding-top: 15;
      height: 60;
      border-radius: 5;
      border-color: ${valid ? 'gray' : 'red'};
      color: black;
      border-width: 1;
      width: 300;
    `

    const Label = styled(Text)`
      padding-left: 10;
      position: absolute;
      top: ${isLabelPushed ? 15 : 25};
      font-size: ${isLabelPushed ? 14 : 20};
      color: ${isLabelPushed ? 'black' : 'gray'};
    `

    return (
      <View>
        <Label>{label}</Label>
        <StyledTextInput
          {...rest}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    )
  }
}

FloatingLabelInput.propTypes = {
  // set borderColor red if field is invalid
  valid: PropTypes.bool,
}
