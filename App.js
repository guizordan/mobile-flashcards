import React from 'react'
import { View, Platform } from 'react-native'

// import { Provider } from 'react-redux'
// import reducer from './reducers'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
import { Feather, AntDesign } from '@expo/vector-icons'

import { black, red, lightRed, gold, white } from './utils/colors'
/* Screens */
import Decks from './screens/Decks'
import Deck from './screens/Deck'
import AddDeck from './screens/AddDeck'
import StatusBar from './components/StatusBar'
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
        backgroundColor: black,
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
        activeTintColor: white,
        style: {
          height: 56,
          backgroundColor: black,
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
        <StatusBar backgroundColor={black} barStyle="light-content" />
        <MainNavigator />
      </View>
      // </Provider>
    )
  }
}
