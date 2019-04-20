import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import styled from 'styled-components/macro'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    )
  }
}
