import React from 'react';
import store from './src/store/configureStore';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import { MainScreen, SecondScreen, ThirdScreen } from './src/screens/';

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator(
      {
        main: {
          screen: MainScreen,
          navigationOptions: { header: null }
        },
        second: {
          screen: SecondScreen,
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
