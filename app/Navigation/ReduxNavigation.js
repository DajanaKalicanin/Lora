/**
 * Lora application
 * Dajana Kalicanin
 * initial: 11/03/2017
 * @flow
 */

 // import react and react-native
 import React from 'react';

 // import other packages
 import * as ReactNative from 'react-navigation';

 // import local files
 import AppNavigation from ./AppNavigation;

 // the redux-aware smart Component
 function ReduxNavigation (props) {
   const { dispatch, nav } = props
   const navigation = ReactNavigation.addNavigationHelper ({
     dispatch,
     state: nav
   })
   return <AppNavigation navigation={navigation} />
 }

 const mapStateToProps = state => ({ nav: state.nav })
 export default connect(mapStateToProps)(ReduxNavigation)
