import React from 'react'
import { View, Platform } from 'react-native'

import { Provider } from 'react-redux'
// import reducer from './reducers'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
import { Feather, AntDesign } from '@expo/vector-icons'

import { blue, brown, white, gold } from './utils/colors'

import store from './store'

import StatusBar from './components/StatusBar'

/* Screens */
import Decks from './screens/Decks'
import Deck from './screens/Deck'
import AddDeck from './screens/AddDeck'
/* Screens */

const DecksStack = createStackNavigator(
  {
    Decks: Decks,
    Deck: Deck,
  },
  {
    initialRouteName: 'Decks',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: brown,
      },
      headerTintColor: white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
)

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
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state

          switch (routeName) {
            case 'AddDeck':
              return <AntDesign name="pluscircle" size={25} color={tintColor} />
            default:
              return <Feather name="layers" size={25} color={tintColor} />
          }
        },
      }),
      navigationOptions: {
        header: null,
      },
      tabBarOptions: {
        activeTintColor: gold,
        style: {
          height: 56,
          backgroundColor: brown,
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
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={blue} barStyle="light-content" />
          <MainNavigator style={{ backgroundColor: brown }} />
        </View>
      </Provider>
    )
  }
}
