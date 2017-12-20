import React, { Component } from 'react';
import styled from 'styled-components/native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/Main';
import AuthScreen from './screens/Auth';

import Text from './components/Text';
import Color from './components/Colors';

import HOC from './HOC';

const StyledView = styled.View`
  flex: 1;
  background-color: ${Color.GREYSCALE.WHITE};
  align-items: center;
  justify-content: center;
`;

const CitizenApp = StackNavigator({
  [SplashScreen.title]: { screen: SplashScreen.component },
  [MainScreen.title]: { screen: MainScreen.component },
  [AuthScreen.title]: { screen: AuthScreen.component },
});

class App extends Component {
  render() {
    return <CitizenApp />;
  }
}

export default HOC.LoadingHOC()(App);
