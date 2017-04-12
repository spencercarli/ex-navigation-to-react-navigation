import React, { Component } from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { NavigationProvider, createRouter } from '@expo/ex-navigation';

import Tabs from './layouts/Tabs';
import Drawer from './layouts/Drawer';

const Router = createRouter(() => ({}));

const App = () => (
  <NavigationProvider router={Router}>
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
       {Platform.OS === 'ios' ? <Tabs /> : <Drawer />}
    </View>
  </NavigationProvider>
);


export default App;
