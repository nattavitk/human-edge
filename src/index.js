import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import Text from './components/Text';
import Color from './components/Colors';

import HOC from './HOC';

const StyledView = styled.View`
  flex: 1;
  background-color: ${Color.GREYSCALE.WHITE};
  align-items: center;
  justify-content: center;
`;

class App extends React.Component {
  render() {
    return (
      <StyledView>
        <Text.UIText>
          Test Open up App.js to start working on your app!
        </Text.UIText>
        <Text.UIText>Changes you make will automatically reload.</Text.UIText>
        <Text.UIText>Shake your phone to open the developer menu.</Text.UIText>
      </StyledView>
    );
  }
}

export default HOC.LoadingHOC()(App);
