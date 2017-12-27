import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Icon } from 'native-base';
import {
  Alert,
  Linking,
  LayoutAnimation,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

import Text from '../../../../components/Text';
import Color from '../../../../components/Colors';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${Color.GREYSCALE.WHITE};
`;

const BarView = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: 'rgba(0,0,0,0.5)';
  padding: 15px;
  flex-direction: row;
`;

const View = styled.View``;

class QR extends Component {
  // static navigationOptions = {
  //   header: null,
  //   drawerLabel: 'QR',
  //   drawerIcon: ({ tintColor }) => (
  //     <Icon
  //       ios="ios-qr-scanner"
  //       android="md-qr-scanner"
  //       style={{ fontSize: 20, color: Color.PRIMARY }}
  //     />
  //   ),
  // };

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      lastScannedUrl: null,
    };
    this.requestCameraPermission = this.requestCameraPermission.bind(this);
    this.handleBarCodeRead = this.handleBarCodeRead.bind(this);
    this.handlePressUrl = this.handlePressUrl.bind(this);
    this.handlePressCancel = this.handlePressCancel.bind(this);
    this.maybeRenderUrl = this.maybeRenderUrl.bind(this);
  }

  componentDidMount() {
    this.requestCameraPermission();
  }

  requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
    }
  };

  handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <BarView>
        <TouchableOpacity onPress={this.handlePressUrl} style={{ flex: 1 }}>
          <Text.UIText
            numberOfLines={1}
            style={{ fontSize: 20, color: Color.GREYSCALE.WHITE }}
          >
            {this.state.lastScannedUrl}
          </Text.UIText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handlePressCancel}
          style={{
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text.UIText
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 18,
            }}
          >
            Cancel
          </Text.UIText>
        </TouchableOpacity>
      </BarView>
    );
  };

  render() {
    return (
      <Container>
        {this.state.hasCameraPermission === null ? (
          <Text.UIText>Requesting for camera permission</Text.UIText>
        ) : this.state.hasCameraPermission === false ? (
          <Text.UIText style={{ color: Color.GREYSCALE.WHITE }}>
            Camera permission is not granted
          </Text.UIText>
        ) : (
          <BarCodeScanner
            onBarCodeRead={this.handleBarCodeRead}
            style={{
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
            }}
          />
        )}
        {this.maybeRenderUrl()}
        <StatusBar hidden />
      </Container>
    );
  }
}

export default QR;
