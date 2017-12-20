import React, { Component, createElement } from 'react';
import { Image } from 'react-native';
import { AppLoading, Asset } from 'expo';
import hoistNonReactStatic from 'hoist-non-react-statics';

import Text from '../../components/Text';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const LoadingHOC = () => {
  return SourceComponent => {
    class AssetsLoading extends Component {
      state = {
        appIsReady: false,
      };

      componentDidMount() {
        console.log(this.props);
        this._loadAssetsAsync().then(() => {
          this.setState({ appIsReady: true });
        });
      }

      render() {
        if (!this.state.appIsReady) return <AppLoading />;
        else
          return createElement(SourceComponent, Object.assign({}, this.props));
      }

      async _loadAssetsAsync() {
        console.log('will load asset');
        const imageAssets = cacheImages([
          //  require('../../../assets/images/screens/group.png'),
          //  require('../../../assets/images/screens/white.png'),
          //  require('../../../assets/images/screens/intro_bg.png'),
          //  require('../../../assets/images/tab/emptyChooseFav.png'),
          //  require('../../../assets/images/tab/profile.png'),
          //  require('../../../assets/images/tab/fav.png'),
          //  require('../../../assets/images/tab/exam.png'),
          //  require('../../../assets/images/tab/explore.png'),
          //  require('../../../assets/images/tab/timetable.png'),
          //  require('../../../assets/images/defaultIcon.png'),
        ]);

        await Promise.all([Text.LoadFontsAsync(), ...imageAssets]);
        console.log('loaded asset');
        return true;
      }
    }

    hoistNonReactStatic(AssetsLoading, SourceComponent);
    return AssetsLoading;
  };
};

export default LoadingHOC;
