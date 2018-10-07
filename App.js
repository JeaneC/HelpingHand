import React from 'react';
import store from './src/store/configureStore';

import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import {
  MainScreen,
  NotifScreen,
  ThirdScreen,
  ConfirmationScreen,
  ProfileScreen,
  HomeScreen,
  CategoryScreen
} from './src/screens/';

export default class App extends React.Component {
  render() {
    const MainNavigator = createStackNavigator(
      {
        category: {
          screen: CategoryScreen,
          navigationOptions: { header: null }
        },
        home: {
          screen: HomeScreen,
          navigationOptions: { header: null }
        },
        main: {
          screen: MainScreen,
          navigationOptions: { header: null }
        },
        notif: {
          screen: NotifScreen,
          navigationOptions: { header: null }
        },
        confirmation: {
          screen: ConfirmationScreen,
          navigationOptions: { header: null }
        },
        profile: {
          screen: ProfileScreen,
          navigationOptions: { header: null }
        }
      },
      {
        lazy: true
      }
    );
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
