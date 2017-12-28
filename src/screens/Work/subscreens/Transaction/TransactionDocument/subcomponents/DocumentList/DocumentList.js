import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Icon } from 'native-base';

import Color from '../../../../../../../components/Colors';

class DocumentList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Required Document</Text>
            </ListItem>
            <ListItem>
              <Icon
                ios="ios-checkbox-outline"
                android="md-checkbox-outline"
                style={{ fontSize: 20, color: Color.PRIMARY, marginRight: 10 }}
              />
              <Text>ID card</Text>
            </ListItem>
            <ListItem>
              <Icon
                ios="ios-checkbox-outline"
                android="md-checkbox-outline"
                style={{ fontSize: 20, color: Color.PRIMARY, marginRight: 10 }}
              />
              <Text>House Registry</Text>
            </ListItem>
            <ListItem>
              <Icon
                ios="ios-checkbox-outline"
                android="md-checkbox-outline"
                style={{ fontSize: 20, color: Color.PRIMARY, marginRight: 10 }}
              />
              <Text>Passport</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Additional Information</Text>
            </ListItem>
            <ListItem>
              <Icon
                ios="ios-checkbox-outline"
                android="md-checkbox-outline"
                style={{ fontSize: 20, color: Color.PRIMARY, marginRight: 10 }}
              />
              <Text>User information</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default DocumentList;
