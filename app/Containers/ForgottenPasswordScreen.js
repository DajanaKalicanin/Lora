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


export default class ForgottenPasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'ForgottenPasswordScreen',
  };

  render() {
    return (
      <View>
        <Text> ForgottenPasswordScreen </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('ForgottenPasswordScreen', () => ForgottenPasswordScreen);
