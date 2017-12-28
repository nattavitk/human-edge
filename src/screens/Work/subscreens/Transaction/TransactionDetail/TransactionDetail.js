import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import Button from '../../../../../components/Button';
import Text from '../../../../../components/Text';
import Color from '../../../../../components/Colors';

import OrganizationTitle from '../../../../../containers/OrganizationTitle';
import TransactionTitle from '../../../../../containers/TransactionTitle';

const SpaceView = styled.View`
  height: 100;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TransactionDetail = ({ navigation }) => (
  <Container>
    <StatusBar barStyle="light-content" />
    <OrganizationTitle />
    <SpaceView />
    <TransactionTitle />
    <Button onPress={() => navigation.navigate('TransactionDocument')}>
      <Text.UIText color={Color.GREYSCALE.WHITE}>Continue</Text.UIText>
    </Button>
  </Container>
);

export default TransactionDetail;
