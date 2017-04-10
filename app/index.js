import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import { Router } from './config/router';
import TabIcon from './components/TabIcon';
import DrawerRow from './components/DrawerRow';

class TabApp extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar
           backgroundColor="#fff"
           barStyle="dark-content"
         />
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
              initialRoute={Router.getRoute('screen1')}
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
              initialRoute={Router.getRoute('screen4')}
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
              initialRoute={Router.getRoute('screen8')}
            />
          </TabItem>
        </TabNavigation>
      </NavigationProvider>
    );
  }
}

// export default TabApp;

class DrawerApp extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar
           backgroundColor="#fff"
           barStyle="dark-content"
         />
         <DrawerNavigation
           id='main'
           initialItem='home'
           drawerWidth={300}
           renderHeader={() => <View style={{ height: 25 }} />}
         >
           <DrawerNavigationItem
             id='home'
             renderTitle={isSelected => <DrawerRow title="Home" isSelected={isSelected} />}
           >
             <StackNavigation
               id='home'
               initialRoute={Router.getRoute('screen1')}
               defaultRouteConfig={{
                  navigationBar: {
                    tintColor: '#181819',
                  }
                }}
             />
           </DrawerNavigationItem>

           <DrawerNavigationItem
             id='camera'
             renderTitle={isSelected => <DrawerRow title="Camera" isSelected={isSelected} />}
           >
             <StackNavigation
               id='camera'
               initialRoute={Router.getRoute('screen4')}
               defaultRouteConfig={{
                  navigationBar: {
                    tintColor: '#181819',
                  }
                }}
             />
           </DrawerNavigationItem>

           <DrawerNavigationItem
             id='analytics'
             renderTitle={isSelected => <DrawerRow title="Analytics" isSelected={isSelected} />}
           >
             <StackNavigation
               id='analytics'
               initialRoute={Router.getRoute('screen8')}
               defaultRouteConfig={{
                  navigationBar: {
                    tintColor: '#181819',
                  }
                }}
             />
           </DrawerNavigationItem>
        </DrawerNavigation>
      </NavigationProvider>
    );
  }
}

export default DrawerApp;
