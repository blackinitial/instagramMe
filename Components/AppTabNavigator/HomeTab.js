import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon} from 'native-base';

class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View>
        <Text> HomeTab </Text>
      </View>
    );
  }
}

export default HomeTab;
