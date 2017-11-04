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
    title: 'LoginScreen',
  };

  render() {
    return (
      <View>
        <Text> LoginScreen </Text>

        <Text
          onPress = {() => this.props.navigation.navigate( 'drawerStack' )} >
          Pretend we logged in
        </Text>
      </View>
    )
  }
};

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
