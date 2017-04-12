import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import {
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import TabIcon from '../components/TabIcon';
import { Stack1, Stack2, Stack3 } from '../config/routes';

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
          <Stack1 />
        </TabItem>

        <TabItem
          id="camera"
          renderIcon={(isSelected) =>
            <TabIcon iconName="ios-aperture-outline" title="Camera" isSelected={isSelected} /> }
        >
          <Stack2 />
        </TabItem>

        <TabItem
          id="analytics"
          renderIcon={(isSelected) =>
            <TabIcon iconName="ios-analytics-outline" title="Analytics" isSelected={isSelected} /> }
        >
          <Stack3 />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default TabApp;
