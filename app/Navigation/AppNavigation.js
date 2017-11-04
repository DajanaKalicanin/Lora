/**
 * Lora application
 * Dajana Kalicanin
 * initial: 11/02/2017
 * @flow
 */

 // import react and react-native
 import React from 'react';
 import {
   Text
 } from 'react-native';

 // import other packages
 import { StackNavigator, DrawerNavigator } from 'react-navigation';

 // import local files
 import LoginScreen from '../Containers/LoginScreen';
 import SignupScreen from '../Containers/SignupScreen';
 import ForgottenPasswordScreen from '../Containers/ForgottenPasswordScreen';
 import DrawerScreen1 from '../Containers/DrawerScreen1';

 // loginStack
 const LoginStack = StackNavigator ({
   login: { screen: LoginScreen },
   signup: { screen: SignupScreen },
   forgottenPassword: { screen: ForgottenPasswordScreen }
 }, {
   headerMode: 'float',
   navigationOptions: {
     headerStyle: { backgroundColor: 'red' },
     title: 'You are not logged in'
   }
 })

 // drawerStack
 const DrawerStack = DrawerNavigator ({
   screen1: { screen: DrawerScreen1 }
 });

 // drawer possible screens
 const DrawerNavigation = StackNavigator ({
   drawerStack: { screen: DrawerStack }
 }, {
   headerMode: 'float',
   navigationOptions: ({ navigation }) => ({
     headerStyle: { backgroundColor: 'green' },
     title: 'Logged in to your app!',
     headerLeft: <Text onPress = {() => navigation.navigate('DrawerOpen')}> Menu </Text>
   })
 })

 // possible screens
 const PrimaryNav = StackNavigator({
   loginStack: { screen : LoginStack },
   drawerStack: { screen : DrawerNavigation }
 }, {
   // default config for all screens
   headerMode: 'none',
   title: 'Main',
   initialRouteName: 'loginStack'
 });

 export default PrimaryNav;
