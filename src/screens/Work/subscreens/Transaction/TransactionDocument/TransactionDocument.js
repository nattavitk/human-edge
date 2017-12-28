import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Button from '../../../../../components/Button';
import Text from '../../../../../components/Text';
import Color from '../../../../../components/Colors';
import TransactionTitle from '../../../../../containers/TransactionTitle';
import DocumentList from './subcomponents/DocumentList';

const Container = styled.View`
  flex: 1;
  background-color: ${Color.GREYSCALE.WHITE};
`;

const SpaceView = styled.View`
  height: 30;
`;

const TransactionDocument = ({ navigation }) => (
  <Container>
    <TransactionTitle />
    <SpaceView />
    <Text.UIText style={{ alignSelf: 'center' }}>
      {'Please find the required document below'}
    </Text.UIText>
    <SpaceView />
    <DocumentList />
    <Button onPress={() => navigation.navigate('Result')}>
      <Text.UIText color={Color.GREYSCALE.WHITE}>Allow</Text.UIText>
    </Button>
    <SpaceView />
  </Container>
);

export default TransactionDocument;
