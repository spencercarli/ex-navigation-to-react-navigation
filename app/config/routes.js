import { StackNavigator } from 'react-navigation';

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

export const Stack1 = StackNavigator({
  Screen1: {
    screen: Screen1,
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
  },
  Screen9: {
    screen: Screen9,
  },
  Screen10: {
    screen: Screen10,
  },
});