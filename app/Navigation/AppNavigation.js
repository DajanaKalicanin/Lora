/**
 * Lora application
 * Dajana Kalicanin
 * initial: 11/02/2017
 * @flow
 */

 // import react and react-native
 import React from 'react';
 import {
 } from 'react-native';
 
 // import other packages
 import { StackNavigator } from 'react-navigation';

 // import local files
 import LoginScreen from '../Containers/LoginScreen';

 // possible screens
 const PrimaryNav = StackNavigator({
   login: {
     screen: LoginScreen
   },
 });

 export default PrimaryNav;
