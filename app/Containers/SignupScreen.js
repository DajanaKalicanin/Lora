/**
 * Lora application
 * Dajana Kalicanin
 * initial: 11/03/2017
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


export default class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'SignupScreen',
  };

  render() {
    return (
      <View>
        <Text> SignupScreen </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('SignupScreen', () => SignupScreen);
