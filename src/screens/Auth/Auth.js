import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { ImageBackground, KeyboardAvoidingView } from 'react-native';

import Firebase from '../../utils/Firebase';

import backgroundImage from '../../../assets/images/screens/splashscreen.jpg';
import Text from '../../components/Text';
import Color from '../../components/Colors';

import LoginForm from '../../components/Form';

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoginView = styled.KeyboardAvoidingView`
  width: 90%;
  height: 50%;
  background-color: 'rgba( 255, 255, 255, 0.8)';
  border-radius: 20;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
`;

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errMsg: '',
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnUsernameChanged = this.handleOnUsernameChanged.bind(this);
    this.handleOnPasswordChanged = this.handleOnPasswordChanged.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.setIsLoading(true);
    const { username, password } = this.state;
    if (!username || !password) return;

    Firebase.signInWithEmail(username, password, msg => {
      this.setState({ errMsg: msg });
      this.props.setIsLoading(false);
    });
  }

  handleOnUsernameChanged(username) {
    this.setState({ username });
  }

  handleOnPasswordChanged(password) {
    this.setState({ password });
  }

  render() {
    const { username, password, errMsg } = this.state;
    return (
      <StyledImageBackground source={backgroundImage}>
        <LoginView>
          <Text.Title size="30">Login</Text.Title>
          <LoginForm
            username={username}
            password={password}
            isLoading={this.props.isLoading}
            isValid={!!username && !!password}
            handleOnSubmit={this.handleOnSubmit}
            handleOnUsernameChanged={this.handleOnUsernameChanged}
            handleOnPasswordChanged={this.handleOnPasswordChanged}
          />
          {!!errMsg && (
            <Text.UIText color={Color.COLORS.grapefruit}>
              {errMsg.message}
            </Text.UIText>
          )}
        </LoginView>
      </StyledImageBackground>
    );
  }
}

Auth.propTypes = {
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
};

Auth.defaultProps = {
  isLoading: false,
  setIsLoading: () => {},
};

export default Auth;
