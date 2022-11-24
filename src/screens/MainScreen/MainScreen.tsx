import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

import {useDebounce} from '../../hooks/useDebounce';

import {SearchPanel} from './components/SearchPanel/SearchPanel';
import {WeatherList} from './components/WeatherList/WeatherList';
import {Loader} from '../../components/Loader/Loader';
import {WeatherUnitTabs} from './components/WeatherUnitTabs/WeatherUnitTabs';

import {IWeather} from '../../types/weather';

import {styles} from './MainScreen.styles';

import {AppDispatch} from '../../store';
import {getCities, selectedCitySelector} from '../../store/slices/citiesSlice';
import {
  getWeather,
  selectedWeatherSelector,
  weatherLoaderSelector,
} from '../../store/slices/weatherSlice';
import {SET_FAVORITE_LIST} from '../../store/slices/favoriteSlice';

export const MainScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {colors} = useTheme();

  const [searchVal, setSearchVal] = useState<string>('');
  const debouncedSearchVal = useDebounce(searchVal, 500);

  const selectedCity = useSelector(selectedCitySelector);
  const selectedWeather = useSelector(selectedWeatherSelector);
  const weatherLoader = useSelector(weatherLoaderSelector);

  const handleChangeSearchVal = useCallback((val: string) => {
    let value = val.replace(/[^A-Za-z\s]/gi, '');
    setSearchVal(value);
  }, []);

  const handleToggleFavorite = useCallback(
    (weather?: IWeather) => {
      dispatch(SET_FAVORITE_LIST({weather, city: selectedCity}));
    },
    [selectedCity, dispatch],
  );

  const handleRefetchWithRefresh = useCallback(() => {
    dispatch(getWeather(selectedCity));
  }, [selectedCity, dispatch]);

  useEffect(() => {
    if (debouncedSearchVal.trim()) {
      dispatch(getCities(debouncedSearchVal));
    }
  }, [debouncedSearchVal, dispatch]);

  useEffect(() => {
    dispatch(getWeather(selectedCity));
  }, [selectedCity, dispatch]);

  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={weatherLoader}
          onRefresh={handleRefetchWithRefresh}
          tintColor={colors.text}
        />
      }>
      <SearchPanel
        searchVal={searchVal}
        onChangeSearchVal={handleChangeSearchVal}
        selectedCity={selectedCity}
      />
      <WeatherUnitTabs />
      {weatherLoader ? (
        <View style={styles.loaderWrapper}>
          <Loader size="large" color={colors.text} />
        </View>
      ) : (
        <WeatherList
          selectedCity={selectedCity}
          selectedWeather={selectedWeather}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </ScrollView>
  );
};
