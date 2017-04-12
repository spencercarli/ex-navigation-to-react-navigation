import React, { Component } from 'react';
import { StatusBar, View, Platform } from 'react-native';

import { Tabs, Drawer } from './config/routes';
import { AlertProvider } from './components/Alert';

const App = () => (
  <AlertProvider>
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
        {Platform.OS === 'ios' ? <Tabs /> : <Drawer />}
    </View>
  </AlertProvider>
);


export default App;
