import React from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {MainScreen} from '../screens/MainScreen/MainScreen';
import {FavoriteScreen} from '../screens/FavoriteScreen/FavoriteScreen';

import {MAIN_SCREEN, FAVORITE_SCREEN} from './consts/screens';

import {navigatorDarkTheme, navigatorLightTheme} from '../styles/themes';
import {COLORS} from '../styles/colors';
import {FONTS} from '../styles/fonts';

const Drawer = createDrawerNavigator<IRootNavigator>();

const DRAWER_HEADER_OPTIONS = {
  headerTitleStyle: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 18,
  },
  drawerLabelStyle: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
  },
};

export const Navigator = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <NavigationContainer
      theme={isDark ? navigatorDarkTheme : navigatorLightTheme}>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: COLORS.PRIMARY,
        }}>
        <Drawer.Screen
          name={MAIN_SCREEN}
          component={MainScreen}
          options={{
            title: 'LOGO',
            drawerLabel: 'Weather',
            ...DRAWER_HEADER_OPTIONS,
          }}
        />
        <Drawer.Screen
          name={FAVORITE_SCREEN}
          component={FavoriteScreen}
          options={{
            title: 'Favorite',
            drawerLabel: 'Favorite',
            ...DRAWER_HEADER_OPTIONS,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export type IRootNavigator = {
  [MAIN_SCREEN]: undefined;
  [FAVORITE_SCREEN]: undefined;
};
