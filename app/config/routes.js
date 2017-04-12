import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import Screen6 from '../screens/Screen6';
import Screen7 from '../screens/Screen7';
import Screen8 from '../screens/Screen8';
import Screen9 from '../screens/Screen9';
import Screen10 from '../screens/Screen10';

const DrawerIcon = ({ navigate }) => {
  if (Platform.OS === 'ios') {
    return null;
  }

  return (
    <Icon 
      name="md-menu" 
      size={28} 
      color="black" 
      onPress={() => navigate('DrawerOpen')}
      style={{ paddingLeft: 20 }}
    />
  );
}

export const Stack1 = StackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      header: (props) => ({
        left: <DrawerIcon {...props} />,
      }),
    },
  },
  Screen2: {
    screen: Screen2,
  },
  Screen3: {
    screen: Screen3,
  },
});

export const Stack2 = StackNavigator({
  Screen4: {
    screen: Screen4,
    navigationOptions: {
      header: (props) => ({
        left: <DrawerIcon {...props} />,
      }),
    },
  },
  Screen5: {
    screen: Screen5,
  },
  Screen6: {
    screen: Screen6,
  },
  Screen7: {
    screen: Screen7,
  },
});

export const Stack3 = StackNavigator({
  Screen8: {
    screen: Screen8,
    navigationOptions: {
      header: (props) => ({
        left: <DrawerIcon {...props} />,
      }),
    },
  },
  Screen9: {
    screen: Screen9,
  },
  Screen10: {
    screen: Screen10,
  },
});

export const Tabs = TabNavigator({
  Home: {
    screen: Stack1,
    navigationOptions: {
      tabBar: {
        label: 'Home',
        icon: ({ tintColor }) => 
          <Icon name="ios-albums-outline" size={32} color={tintColor} />,
      },
    },
  },
  Camera: {
    screen: Stack2,
    navigationOptions: {
      tabBar: {
        label: 'Camera',
        icon: ({ tintColor }) => 
          <Icon name="ios-aperture-outline" size={32} color={tintColor} />,
      },
    },
  },
  Analytics: {
    screen: Stack3,
    navigationOptions: {
      tabBar: {
        label: 'Analytics',
        icon: ({ tintColor }) => 
          <Icon name="ios-analytics-outline" size={32} color={tintColor} />,
      },
    },
  },
});

export const Drawer = DrawerNavigator({
  Home: {
    screen: Stack1,
    navigationOptions: {
      drawer: {
        label: 'Home',
      },
    },
  },
  Camera: {
    screen: Stack2,
    navigationOptions: {
      drawer: {
        label: 'Camera',
      },
    },
  },
  Analytics: {
    screen: Stack3,
    navigationOptions: {
      drawer: {
        label: 'Analytics',
      },
    },
  },
});