import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../components/Text';
import Color from '../../components/Colors';

const Container = styled.View`
  flex: 1;
  color: ${Color.COLORS.grapefruit};
`;

const OrganizationTitle = ({ title }) => (
  <Container>
    <Text.UIText>{title}</Text.UIText>
  </Container>
);

OrganizationTitle.propTypes = {
  title: PropTypes.string,
};

OrganizationTitle.defaultProps = {
  title: 'no title',
};

export default OrganizationTitle;
