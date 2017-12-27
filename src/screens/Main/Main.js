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
  },
  [Profile.title]: { screen: Profile.component },
  [Transaction.title]: { screen: Transaction.component },
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
