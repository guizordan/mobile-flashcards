import React from 'react'
import { View, Platform } from 'react-native'

// import { Provider } from 'react-redux'
// import reducer from './reducers'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

/* Screens */
import Decks from './screens/Decks'
import Deck from './screens/Deck'
import AddDeck from './screens/AddDeck'
import StatusBar from './components/StatusBar'
/* Screens */

const DecksStack = createStackNavigator({
  Decks: Decks,
  Deck: Deck,
})

const AddDeckStack = createStackNavigator({
  AddDeck: AddDeck,
})

const MainNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Decks: DecksStack,
      AddDeck: AddDeckStack,
    },
    {
      // navigationOptions: {
      //   header: null,
      // },
      tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
          height: 56,
          backgroundColor: Platform.OS === 'ios' ? white : purple,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
      },
    },
  ),
)

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={purple} barStyle="light-content" />
        <MainNavigator />
      </View>
      // </Provider>
    )
  }
}
