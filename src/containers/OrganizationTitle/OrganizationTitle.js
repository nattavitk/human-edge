import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Icon } from 'native-base';

import Text from '../../components/Text';
import Color from '../../components/Colors';

const Container = styled.View`
  align-items: center;
`;

const OrganizationTitle = ({ title }) => (
  <Container>
    <Icon
      ios="ios-home"
      android="md-home"
      style={{ fontSize: 100, color: Color.PRIMARY }}
    />
    <Text.Title color={Color.GREYSCALE.GREY_5}>{'Organization'}</Text.Title>
    <Text.UIText color={Color.GREYSCALE.GREY_5}>{title}</Text.UIText>
  </Container>
);

OrganizationTitle.propTypes = {
  title: PropTypes.string,
};

OrganizationTitle.defaultProps = {
  title: 'no title',
};

export default OrganizationTitle;
