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

class Transaction extends Component {
  // static navigationOptions = {
  //   drawerLabel: 'Transaction',
  //   drawerIcon: ({ tintColor }) => (
  //     <Icon
  //       ios="logo-buffer"
  //       android="logo-buffer"
  //       style={{ fontSize: 20, color: Color.PRIMARY }}
  //     />
  //   ),
  // };
  render() {
    return (
      <Container>
        <Text.UIText>Transaction</Text.UIText>
      </Container>
    );
  }
}

export default Transaction;
