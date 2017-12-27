import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Icon } from 'native-base';

import Text from '../../../../components/Text';
import Color from '../../../../components/Colors';
import Button from '../../../../components/Button';

class SignoutButton extends Component {
  // static navigationOptions = {
  //   drawerLabel: 'Signout',
  //   drawerIcon: ({ tintColor }) => (
  //     <Icon
  //       ios="ios-qr-scanner"
  //       android="md-qr-scanner"
  //       style={{ fontSize: 20, color: Color.PRIMARY }}
  //     />
  //   ),
  // };
  render() {
    return (
      <Button>
        <Text.UIText>Log out</Text.UIText>
      </Button>
    );
  }
}

export default SignoutButton;
