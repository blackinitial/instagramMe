import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon} from 'native-base';

class ProfileTab extends Component {
  
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View>
        <Text> ProfileTab </Text>
      </View>
    );
  }
}

export default ProfileTab;
