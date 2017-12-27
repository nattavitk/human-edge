import { Platform } from 'react-native';

import Text from '../components/Text';
import Colors from '../components/Colors';

const tabStyle = {
  top: {
    height: 65,
    padding: 12,
    fontSize: Text.Size.actionNormal,
    fontFamily: Text.FONT_FACE.PROMPT.MEDIUM,
  },
  bottom: {
    height: 52, // 65,
    padding: 0,
    fontSize: 10, // Text.Size.actionSmall,
  },
  title: {
    fontSize: Text.Size.title,
    // fontWeight: '500',
    // React Native bug - custom font must use fontWeight >= 500 on android
    // https://github.com/react-community/react-navigation/issues/542#issuecomment-283663786
    ...Platform.select({
      android: {
        fontWeight: '200',
      },
    }),
  },
  font: {
    family: Text.FONT_FACE.PROMPT.REGULAR,
    size: Text.Size.actionSmall,
  },
};

// primarily for customizing tcomb-form-native
const textInputStyle = {
  textbox: {
    fontSize: 16,
    lineHeight: Text.getLineHeight(16),
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginBottom: 5,
    fontFamily: Text.FONT_FACE.PROMPT.REGULAR,
    color: Colors.GREYSCALE.GREY_5,
  },

  textboxReadOnly: {
    fontSize: 16,
    lineHeight: Text.getLineHeight(16),
    marginBottom: 5,
    fontFamily: Text.FONT_FACE.PROMPT.REGULAR,
    color: Colors.GREYSCALE.GREY_5,
  },

  label: {
    fontSize: 16,
    lineHeight: Text.getLineHeight(16),
    fontFamily: Text.FONT_FACE.PROMPT.LIGHT,
    color: Colors.PRIMARY,
    marginBottom: 0,
  },

  textboxView: {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.PRIMARY,
    marginBottom: 4,
  },

  helpBlock: {
    fontFamily: Text.FONT_FACE.PROMPT.LIGHT,
    fontSize: Text.Size.small,
    color: Colors.PRIMARY,
    textAlign: 'right',
  },
};

export { tabStyle, textInputStyle };
