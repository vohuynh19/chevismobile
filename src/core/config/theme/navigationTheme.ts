import {DefaultTheme, Theme} from '@react-navigation/native';

import {theme} from './theme';

export const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.neutralLavender200,
  },
};
