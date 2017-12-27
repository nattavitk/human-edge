import React, { Component } from 'react';
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

import * as config from '../../config';
import backgroundImage from '../../../assets/images/screens/splashscreen.jpg';
import Text from '../../components/Text';
import Color from '../../components/Colors';

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
`;

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }

  componentDidMount() {
    if (config.ENABLE_AUTH) {
      setTimeout(() => this.userLogin(), 2000);
    } else {
      this.navigateTo('Main');
    }
  }

  userLogin() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.navigateTo('Main');
      } else {
        this.navigateTo('Auth');
      }
    });
  }

  navigateTo(screen) {
    const resetNavigateAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: screen,
        }),
      ],
    });
    this.props.navigation.dispatch(resetNavigateAction);
  }

  render() {
    return <StyledImageBackground source={backgroundImage} />;
  }
}

export default SplashScreen;
