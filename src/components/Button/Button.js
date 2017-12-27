import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'native-base';
import { ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';

import Text from '../Text';
import Color from '../Colors';

const StyledButton = styled(Button)`
  margin-top: 50px;
  width: 100px;
  padding: 5px;
  border-radius: 50;
  align-self: center;
  justify-content: center;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
`;

const CAButton = props => {
  return (
    <StyledButton {...props}>
      {props.isLoading ? (
        <ActivityIndicator color={Color.GREYSCALE.WHITE} />
      ) : (
        props.children
      )}
    </StyledButton>
  );
};

CAButton.propTypes = {
  width: PropTypes.string,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.element,
};

CAButton.defaultProps = {
  width: '',
  isLoading: false,
  onPress: () => {},
  childrend: null,
};

export default CAButton;
