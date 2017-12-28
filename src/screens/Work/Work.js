import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';

import QR from './subscreens/QR';
import TransactionDetail from './subscreens/Transaction/TransactionDetail';
import TransactionDocument from './subscreens/Transaction/TransactionDocument';
import Result from './subscreens/Result';

const routes = {
  [QR.title]: { screen: QR.component },
  [TransactionDetail.title]: { screen: TransactionDetail.component },
  [TransactionDocument.title]: { screen: TransactionDocument.component },
  // [Result.title]: { screen: Result.component },
  [Result.title]: {
    screen: ({ navigation }) => (
      <Result.component
        screenProps={{
          rootNavigation: navigation,
        }}
      />
    ),
  },
};

const Work = StackNavigator(routes, {
  initialRouteName: QR.title,
  navigationOptions: ({ navigation }) => ({
    title: 'Transaction',
  }),
});

export default Work;
