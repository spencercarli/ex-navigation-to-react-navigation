import { createRouter } from '@expo/ex-navigation';

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

export const Router = createRouter(() => ({
  screen1: () => Screen1,
  screen2: () => Screen2,
  screen3: () => Screen3,
  screen4: () => Screen4,
  screen5: () => Screen5,
  screen6: () => Screen6,
  screen7: () => Screen7,
  screen8: () => Screen8,
  screen9: () => Screen9,
  screen10: () => Screen10,
}));
