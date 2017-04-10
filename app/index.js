import React, { Component } from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { NavigationProvider } from '@expo/ex-navigation';

import Tabs from './layouts/Tabs';
import Drawer from './layouts/Drawer';
import { Router } from './config/router';
import { AlertProvider } from './components/Alert';

const App = () => (
  <AlertProvider>
    <NavigationProvider router={Router}>
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content"
        />
         {Platform.OS === 'ios' ? <Tabs /> : <Drawer />}
      </View>
    </NavigationProvider>
  </AlertProvider>
);


export default App;
