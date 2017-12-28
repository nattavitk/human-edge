import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Icon } from 'native-base';

import Text from '../../components/Text';
import Color from '../../components/Colors';

const Container = styled.View`
  align-items: center;
`;

const TransactionTitle = ({ title }) => (
  <Container>
    <Icon
      ios="ios-document"
      android="md-document"
      style={{ fontSize: 50, color: Color.PRIMARY }}
    />
    <Text.Title color={Color.COLORS.facebook}>{'Transaction'}</Text.Title>
    <Text.UIText color={Color.COLORS.facebook}>{title}</Text.UIText>
  </Container>
);

TransactionTitle.propTypes = {
  title: PropTypes.string,
};

TransactionTitle.defaultProps = {
  title: 'no title',
};

export default TransactionTitle;
