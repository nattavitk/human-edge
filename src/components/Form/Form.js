import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Item, Input, Label } from 'native-base';
import styled from 'styled-components/native';

import Text from '../Text';
import Color from '../Colors';
import Button from '../Button';

const StyledForm = styled(Form)`
  width: 100%;
`;

const View = styled.View``;

class FloatingLabelForm extends Component {
  render() {
    return (
      <StyledForm>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            keyboardType="email-address"
            onChangeText={username =>
              this.props.handleOnUsernameChanged(username)
            }
            value={this.props.username}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            secureTextEntry
            returnKeyType="go"
            onChangeText={password =>
              this.props.handleOnPasswordChanged(password)
            }
            value={this.props.password}
          />
        </Item>
        <View>
          <Button
            disabled={!this.props.isValid}
            onPress={this.props.handleOnSubmit}
            isLoading={this.props.isLoading}
          >
            <Text.UIText color={Color.GREYSCALE.WHITE}>Login</Text.UIText>
          </Button>
        </View>
      </StyledForm>
    );
  }
}

FloatingLabelForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  handleOnUsernameChanged: PropTypes.func,
  handleOnPasswordChanged: PropTypes.func,
  handleOnSubmit: PropTypes.func,
};

FloatingLabelForm.defaultProps = {
  username: '',
  password: '',
  isLoading: false,
  isValid: false,
  handleOnUsernameChanged: () => {},
  handleOnPasswordChanged: () => {},
  handleOnSubmit: () => {},
};

export default FloatingLabelForm;
