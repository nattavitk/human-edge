import React, { Component } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'native-base';

import Text from '../../../../components/Text';
import Color from '../../../../components/Colors';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const View = styled.View`
  align-items: center;
  justify-content: center;
`;

class Home extends Component {
  // static navigationOptions = {
  //   drawerLabel: 'Home',
  //   drawerIcon: ({ tintColor }) => (
  //     <Icon
  //       ios="ios-home"
  //       android="md-home"
  //       style={{ fontSize: 20, color: Color.PRIMARY }}
  //     />
  //   ),
  // };

  constructor(props) {
    super(props);
    this.handleOnQRPressed = this.handleOnQRPressed.bind(this);
  }

  handleOnQRPressed() {
    //  this.props.navigation.navigate('QR');
    // const resetNavigateAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({
    //       routeName: 'QR',
    //     }),
    //   ],
    // });
    // this.props.navigation.dispatch(resetNavigateAction);
    const rootNavigation = this.props.screenProps
      ? this.props.screenProps.rootNavigation
      : null;

    if (rootNavigation) {
      rootNavigation.navigate('Work');
    }
  }

  render() {
    return (
      <Container>
        <TouchableOpacity onPress={this.handleOnQRPressed}>
          <View>
            <Icon
              ios="ios-qr-scanner"
              android="md-qr-scanner"
              style={{ fontSize: 100, color: Color.PRIMARY }}
            />
            <Text.UIText>Press to scan QR</Text.UIText>
          </View>
        </TouchableOpacity>
        <StatusBar barStyle="dark-content" />
      </Container>
    );
  }
}

// const route = {
//   Home: { screen: Home },
//   [QR.title]: { screen: QR.component },
//   [Profile.title]: { screen: Profile.component },
//   [Transaction.title]: { screen: Transaction.component },
//   [SignoutButton.title]: { screen: SignoutButton.component },
// };

// const MyApp = DrawerNavigator(route);

export default Home;
