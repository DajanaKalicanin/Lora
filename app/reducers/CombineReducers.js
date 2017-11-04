/**
 * Lora application
 * Dajana Kalicanin
 * initial: 11/03/2017
 * @flow
 */

 // import react and react-native
 import React from 'react';

 // import other packages

 // import local files
 import AppNavigation from ./AppNavigation;

 // navigation reducer
 const navReducer = { state, action } => {
   const newState = AppNavigation.router.getStateForAction( action, state )
   return newState || state
 }

 const rootReducer = combineReducers ({
   nav: navReducer,
 })
