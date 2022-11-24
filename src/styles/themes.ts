import {DefaultTheme} from '@react-navigation/native';

import {COLORS} from './colors';

export const navigatorDarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.LIGHT_GRAY,
    background: COLORS.SECONDARY,
    card: COLORS.SECONDARY,
    text: COLORS.WHITE,
    border: COLORS.PRIMARY,
  },
};
export const navigatorLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.SECONDARY,
    background: COLORS.WHITE,
    card: COLORS.WHITE,
    text: COLORS.SECONDARY,
    border: COLORS.PRIMARY,
  },
};
