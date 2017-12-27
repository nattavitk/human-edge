import React, { Component } from 'react';
import styled from 'styled-components/native';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';

import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/Main';
import AuthScreen from './screens/Auth';
import WorkScreen from './screens/Work';

import Text from './components/Text';
import Color from './components/Colors';

import HOC from './HOC';

import configureStore from './store/configureStore';

const store = configureStore();

const StyledView = styled.View`
  flex: 1;
  background-color: ${Color.GREYSCALE.WHITE};
  align-items: center;
  justify-content: center;
`;

const route = {
  [SplashScreen.title]: { screen: SplashScreen.component },
  [MainScreen.title]: { screen: MainScreen.component },
  [AuthScreen.title]: { screen: AuthScreen.component },
  [WorkScreen.title]: { screen: WorkScreen.component },
};

const CitizenApp = StackNavigator(route, {
  initialRouteName: SplashScreen.title,
  navigationOptions: {
    header: null,
  },
});

class App extends Component {
  render() {
    return <CitizenApp />;
  }
}

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default HOC.LoadingHOC()(RNRedux);
