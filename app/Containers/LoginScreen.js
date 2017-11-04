/**
 * Lora application
 * Dajana Kalicanin
 * initial: 11/02/2017
 * @flow
 */

// import react and react-native
import React from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

// import local files


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View>
        <Text> Ja tebe mnogoooo volim, idi stavi kafu </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
