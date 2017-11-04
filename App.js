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
  View
} from 'react-native';

// import local files
import AppNavigation from './app/Navigation/AppNavigation';

AppRegistry.registerComponent('Lora', () => AppNavigation);
