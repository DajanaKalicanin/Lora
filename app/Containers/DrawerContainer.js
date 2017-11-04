/**
 * Lora application
 * Dajana Kalicanin
 * initial: 11/03/2017
 * @flow
 */

// import react and react-native
import React from 'react';
import {
  View,
  Text
} from 'react-native';

// import other packages
import { NavigationActions } from 'react-navigation';

// import local files

export default class DrawerContainer extends React.Component {

  logout = () => {
    const actionToDispatch = NavigationActions.reset ({
      index: 0,
      key: null,
      actions: [ NavigationActions.navigate ({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch( actionToDispatch )
  };

  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text
          onPress = {() => navigation.navigate( 'screen1' )} >
          Screen 1
        </Text>

        <Text
          onPress = { this.logout } >
          Log out
        </Text>
      </View>
    )
  }
};
