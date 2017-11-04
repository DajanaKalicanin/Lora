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


export default class DrawerPage1 extends React.Component {
  static navigationOptions = {
    title: 'DrawerPage1',
  };

  render() {
    return (
      <View>
      </View>
    );
  }
}

AppRegistry.registerComponent('DrawerPage1', () => DrawerPage1);
