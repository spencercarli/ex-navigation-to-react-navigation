import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import TabIcon from '../components/TabIcon';

class TabApp extends Component {
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="home"
      >
        <TabItem
          id="home"
          renderIcon={(isSelected) =>
            <TabIcon iconName="ios-albums-outline" title="Home" isSelected={isSelected} /> }
        >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute="screen1"
          />
        </TabItem>

        <TabItem
          id="camera"
          renderIcon={(isSelected) =>
            <TabIcon iconName="ios-aperture-outline" title="Camera" isSelected={isSelected} /> }
        >
          <StackNavigation
            id="camera"
            navigatorUID="camera"
            initialRoute="screen4"
          />
        </TabItem>

        <TabItem
          id="analytics"
          renderIcon={(isSelected) =>
            <TabIcon iconName="ios-analytics-outline" title="Analytics" isSelected={isSelected} /> }
        >
          <StackNavigation
            id="analytics"
            navigatorUID="analytics"
            initialRoute="screen8"
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default TabApp;
