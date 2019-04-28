import React from 'react'
import { View, Platform } from 'react-native'

// import { Provider } from 'react-redux'
// import reducer from './reducers'

import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

/* Screens */
import Decks from './screens/Decks'
import StatusBar from './components/StatusBar'
/* Screens */

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
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
)

// const MainNavigator = StackNavigator({
//   Home: {
//     screen: Tabs,
//   },
// })

const MainNavigator = createAppContainer(Tabs)

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
