import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../components/Text';
import Color from '../../components/Colors';

const Container = styled.View`
  flex: 1;
  color: ${Color.COLORS.facebook};
`;

const TransactionTitle = ({ title }) => (
  <Container>
    <Text.UIText>{title}</Text.UIText>
  </Container>
);

TransactionTitle.propTypes = {
  title: PropTypes.string,
};

TransactionTitle.defaultProps = {
  title: 'no title',
};

export default TransactionTitle;
