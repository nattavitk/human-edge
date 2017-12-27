import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../../../components/Text';
import Color from '../../../../components/Colors';
import Button from '../../../../components/Button';

const Container = styled.View``;

const Result = ({ navigation, screenProps }) => (
  <Container>
    <Text.UIText>{`Your transaction is ${
      screenProps.result.status
    }`}</Text.UIText>
    <Button>
      <Text.UIText>Dismiss</Text.UIText>
    </Button>
  </Container>
);

export default Result;
