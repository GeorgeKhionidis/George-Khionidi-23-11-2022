import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {ICity} from '../../../../types/city';
import {IWeather, IWeatherForFiveDays} from '../../../../types/weather';

import {formattedDate} from '../../../../utils/day';
import {weatherUnitToCelsius} from '../../../../utils/weatherUnit';

import {styles} from './WeatherList.styles';

import {isSelectedCityInFavoriteSelector} from '../../../../store/slices/favoriteSlice';
import {isCelsiusUnitSelector} from '../../../../store/slices/weatherSlice';

type IProps = {
  selectedCity: ICity;
  selectedWeather: IWeatherForFiveDays | null;
  onToggleFavorite: (weather?: IWeather) => void;
};

export const WeatherList: React.FC<IProps> = ({
  selectedCity,
  selectedWeather,
  onToggleFavorite,
}) => {
  const {colors} = useTheme();

  const isCityInFavorite = useSelector(isSelectedCityInFavoriteSelector);
  const isCelsiusUnit = useSelector(isCelsiusUnitSelector);

  return (
    <>
      <View style={styles.todayWeatherWrapper}>
        <Text style={[styles.todayWeatherName, {color: colors.text}]}>
          {selectedCity?.LocalizedName}
        </Text>
        <Text style={[styles.todayWeatherDate, {color: colors.text}]}>
          {formattedDate(selectedWeather?.DailyForecasts?.[0].Date)}
        </Text>
        <Text style={[styles.todayWeatherTemperature, {color: colors.text}]}>
          {isCelsiusUnit
            ? weatherUnitToCelsius(
                selectedWeather?.DailyForecasts?.[0]?.Temperature?.Maximum
                  ?.Value,
              )
            : selectedWeather?.DailyForecasts?.[0]?.Temperature?.Maximum
                ?.Value}{' '}
          {isCelsiusUnit
            ? '°C'
            : selectedWeather?.DailyForecasts?.[0]?.Temperature?.Maximum?.Unit}
        </Text>
        <TouchableOpacity
          style={[
            styles.favoriteWrapper,
            {
              borderColor: colors.text,
            },
            isCityInFavorite && {
              backgroundColor: colors.primary,
            },
          ]}
          onPress={() =>
            onToggleFavorite(selectedWeather?.DailyForecasts?.[0])
          }>
          <Text
            style={[
              styles.favoriteText,
              {color: colors.text},
              isCityInFavorite && {
                color: colors.background,
              },
            ]}>
            {isCityInFavorite ? 'Remove from favorite' : 'Add to favorite'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fiveDaysListWrapper}>
        {selectedWeather?.DailyForecasts?.map(days => (
          <View key={days?.Date} style={styles.fiveDaysItemWrapper}>
            <Text style={[styles.weatherName, {color: colors.text}]}>
              {selectedCity?.LocalizedName}
            </Text>
            <Text style={[styles.weatherDate, {color: colors.text}]}>
              {formattedDate(days?.Date)}
            </Text>
            <Text style={[styles.weatherTemperature, {color: colors.text}]}>
              {isCelsiusUnit
                ? weatherUnitToCelsius(days?.Temperature?.Maximum?.Value)
                : days?.Temperature?.Maximum?.Value}{' '}
              {isCelsiusUnit ? '°C' : days?.Temperature?.Maximum?.Unit}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
};
