import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Font } from 'expo';

import Colors from '../Colors';

const Size = {
  xsmall: 10,
  small: 12,
  normal: 14,
  title: 16,
  actionSmall: 12,
  actionNormal: 14,
  actionLarge: 16,
};

const FONT_FACE = {
  PROMPT: {
    LIGHT: 'prompt-light',
    REGULAR: 'prompt-regular',
    SEMIBOLD: 'prompt-semi-bold',
    MEDIUM: 'prompt-medium',
    EXTRALIGHTITALIC: 'prompt-extra-light-italic',
  },
};

const getLineHeight = fontSize => {
  const decimalResults = fontSize * 1.4;
  if (Platform.OS === 'android') return Math.ceil(decimalResults);
  return decimalResults;
};

export const Text = styled.Text`
  font-size: ${({ size }) => size || Size.normal};
  line-height: ${({ size }) =>
    getLineHeight(size) || getLineHeight(Size.normal)};
  color: ${({ color }) => color || Colors.GREYSCALE.GREY_4};
  font-family: ${({ font }) => font || FONT_FACE.PROMPT.REGULAR};
  background-color: rgba(0, 0, 0, 0);
`;

export const UIText = Text;

export const Title = UIText.extend`
  font-family: ${({ font }) => font || FONT_FACE.PROMPT.SEMIBOLD};
  font-size: ${({ size }) => size || Size.title};
  line-height: ${({ size }) =>
    getLineHeight(size) || getLineHeight(Size.title)};
  color: ${({ color }) => color || Colors.PRIMARY};
`;

export const Subtitle = Title.extend`
  font-family: ${FONT_FACE.PROMPT.MEDIUM};
  color: ${Colors.GREYSCALE.GREY_3};
`;

export const LoadFontsAsync = () => {
  return Font.loadAsync({
    'prompt-extra-light-italic': require('../../../assets/fonts/Prompt/Prompt-ExtraLightItalic.ttf'),
    'prompt-light': require('../../../assets/fonts/Prompt/Prompt-Light.ttf'),
    //  fix arial not found on android
    arial: require('../../../assets/fonts/Prompt/Prompt-Regular.ttf'),
    'prompt-regular': require('../../../assets/fonts/Prompt/Prompt-Regular.ttf'),
    'prompt-semi-bold': require('../../../assets/fonts/Prompt/Prompt-SemiBold.ttf'),
    'prompt-medium': require('../../../assets/fonts/Prompt/Prompt-Medium.ttf'),
  });
};

export default {
  Size,
  FONT_FACE,
  getLineHeight,
  Text,
  UIText,
  Title,
  Subtitle,
  LoadFontsAsync,
};
