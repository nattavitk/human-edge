import React from 'react';
import styled from 'styled-components/native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'native-base';

import Home from './subscreens/Home';
import Profile from './subscreens/Profile';
import Transaction from './subscreens/Transaction';

import Text from '../../components/Text';
import Color from '../../components/Colors';
import * as TEMPLATE from '../../styles/styles';

const StyledView = styled.View`
  flex: 1;
  background-color: ${Color.GREYSCALE.WHITE};
  align-items: center;
  justify-content: center;
`;

const route = {
  // [Home.title]: { screen: Home.component },
  [Home.title]: {
    screen: ({ navigation }) => (
      <Home.component
        screenProps={{
          rootNavigation: navigation,
        }}
      />
    ),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          ios="ios-qr-scanner"
          android="md-qr-scanner"
          style={{ fontSize: 20, color: Color.PRIMARY }}
        />
      ),
    },
  },
  [Profile.title]: {
    screen: Profile.component,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          ios="ios-person"
          android="md-person"
          style={{ fontSize: 20, color: Color.PRIMARY }}
        />
      ),
    },
  },
  [Transaction.title]: {
    screen: Transaction.component,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          ios="ios-document"
          android="md-document"
          style={{ fontSize: 20, color: Color.PRIMARY }}
        />
      ),
    },
  },
};

const Main = TabNavigator(route, {
  initialRouteName: Home.title,
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
  swipeEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: Color.TINT_COLOR,
    inactiveTintColor: Color.GREYSCALE.GREY_4,
    style: {
      backgroundColor: Color.COLORS.whiteTwo,
      height: TEMPLATE.tabStyle.bottom.height,
      padding: TEMPLATE.tabStyle.bottom.padding,
      paddingBottom: 0,
    },
    labelStyle: {
      fontFamily: TEMPLATE.tabStyle.font.family,
      fontSize: TEMPLATE.tabStyle.bottom.fontSize,
    },
    iconStyle: {},
  },
});

// const MyApp = DrawerNavigator({
//   Main: { screen: Main },
//   [Profile.title]: { screen: Profile.component },
//   [Transaction.title]: { screen: Transaction.component },
// });

export default Main;
