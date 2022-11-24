import React, {memo, useCallback} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

import {styles} from './WeatherUnitTabs.styles';

import {
  isCelsiusUnitSelector,
  SET_WEATHER_UNIT,
} from '../../../../store/slices/weatherSlice';

export const WeatherUnitTabs = memo(() => {
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const isCelsiusUnit = useSelector(isCelsiusUnitSelector);

  const handleChangeUnitTab = useCallback(
    (tab: 'Fahrenheit' | 'Celsius') => {
      dispatch(SET_WEATHER_UNIT(tab));
    },
    [dispatch],
  );

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[
          styles.tabItemWrapper,
          {borderColor: colors.text},
          isCelsiusUnit && {backgroundColor: colors.text},
        ]}
        onPress={() => handleChangeUnitTab('Celsius')}>
        <Text
          style={[
            styles.tabItemText,
            {color: colors.text},
            isCelsiusUnit && {color: colors.background},
          ]}>
          Celsius
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabItemWrapper,
          {borderColor: colors.text},
          !isCelsiusUnit && {backgroundColor: colors.text},
        ]}
        onPress={() => handleChangeUnitTab('Fahrenheit')}>
        <Text
          style={[
            styles.tabItemText,
            {color: colors.text},
            !isCelsiusUnit && {color: colors.background},
          ]}>
          Fahrenheit
        </Text>
      </TouchableOpacity>
    </View>
  );
});
