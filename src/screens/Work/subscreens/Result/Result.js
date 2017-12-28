import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Text from '../../../../components/Text';
import Color from '../../../../components/Colors';
import Button from '../../../../components/Button';

const Container = styled.View`
  flex: 1;
  background-color: ${Color.GREYSCALE.WHITE};
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Result = ({ navigation, screenProps }) => (
  <Container>
    <Text.Title>{`Your transaction is successful`}</Text.Title>
    <Text.UIText
    >{`You will be triggered when this organization accesses to your documents`}</Text.UIText>
    <Button onPress={() => screenProps.rootNavigation.navigate('Main')}>
      <Text.UIText color={Color.GREYSCALE.WHITE}>Done</Text.UIText>
    </Button>
  </Container>
);

export default Result;
