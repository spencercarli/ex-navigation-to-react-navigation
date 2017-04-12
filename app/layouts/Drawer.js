import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import DrawerRow from '../components/DrawerRow';
import { Stack1, Stack2, Stack3 } from '../config/routes';

class DrawerApp extends Component {
  render() {
    return (
       <DrawerNavigation
         id='main'
         initialItem='home'
         drawerWidth={300}
       >
         <DrawerNavigationItem
           id='home'
           renderTitle={isSelected => <DrawerRow title="Home" isSelected={isSelected} />}
         >
           <Stack1 />
         </DrawerNavigationItem>

         <DrawerNavigationItem
           id='camera'
           renderTitle={isSelected => <DrawerRow title="Camera" isSelected={isSelected} />}
         >
           <Stack2 />
         </DrawerNavigationItem>

         <DrawerNavigationItem
           id='analytics'
           renderTitle={isSelected => <DrawerRow title="Analytics" isSelected={isSelected} />}
         >
           <Stack3 />
         </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

export default DrawerApp;
