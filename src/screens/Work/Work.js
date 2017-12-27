import React from 'react';
import PropTypes from 'prop-types';

import QR from './subscreens/QR';
import { StackNavigator } from '../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-navigation';

const routes = {
  [QR.title]: { screen: QR.component },
};

const Work = StackNavigator(route, {
  initialRouteName: QR.title,
  navigationOptions: ({ navigation }) => ({
    title: 'Work',
  }),
});

export default Work;
