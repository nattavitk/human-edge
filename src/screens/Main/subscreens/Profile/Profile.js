import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Icon } from 'native-base';

import Text from '../../../../components/Text';
import Color from '../../../../components/Colors';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

class Profile extends Component {
  // static navigationOptions = {
  //   drawerLabel: 'Profile',
  //   drawerIcon: ({ tintColor }) => (
  //     <Icon
  //       ios="ios-happy"
  //       android="md-happy"
  //       style={{ fontSize: 20, color: Color.PRIMARY }}
  //     />
  //   ),
  // };
  render() {
    return (
      <Container>
        <Text.UIText>Profile</Text.UIText>
      </Container>
    );
  }
}

export default Profile;
