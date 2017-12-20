import React, { Component } from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import Text from '../../components/Text';
import Color from '../../components/Colors';

const StyledView = styled.View`
  flex: 1;
  background-color: ${Color.GREYSCALE.WHITE};
  align-items: center;
  justify-content: center;
`;

class Main extends Component {
  render() {
    return (
      <StyledView>
        <Text.UIText>Main screen</Text.UIText>
      </StyledView>
    );
  }
}

export default Main;
