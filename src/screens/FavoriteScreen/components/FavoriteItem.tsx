import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

import {IFavorite} from '../../../types/favorite';

import {styles} from './FavoriteItem.styles';

import {weatherUnitToCelsius} from '../../../utils/weatherUnit';

import {isCelsiusUnitSelector} from '../../../store/slices/weatherSlice';

type IProps = {
  favorite: IFavorite;
  onRemoveCityFromFavorite: (favorite: IFavorite) => void;
  onOpenWeatherByCity: (favorite: IFavorite) => void;
};

export const FavoriteItem: React.FC<IProps> = ({
  favorite,
  onRemoveCityFromFavorite,
  onOpenWeatherByCity,
}) => {
  const {colors} = useTheme();

  const isCelsiusUnit = useSelector(isCelsiusUnitSelector);

  return (
    <TouchableOpacity
      onPress={() => onOpenWeatherByCity(favorite)}
      style={[styles.wrapper, {borderBottomColor: colors.border}]}>
      <Text style={[styles.cityName, {color: colors.text}]}>
        {favorite?.city?.LocalizedName}
      </Text>
      <View style={styles.rightContentWrapper}>
        <TouchableOpacity
          style={[styles.removeButtonWrapper, {borderColor: colors.text}]}
          onPress={() => onRemoveCityFromFavorite(favorite)}>
          <Text style={[styles.removeButtonText, {color: colors.text}]}>
            Remove
          </Text>
        </TouchableOpacity>
        <Text style={[styles.temperatureText, {color: colors.text}]}>
          {isCelsiusUnit
            ? weatherUnitToCelsius(
                favorite?.weather?.Temperature?.Maximum?.Value,
              )
            : favorite?.weather?.Temperature?.Maximum?.Value}{' '}
          {isCelsiusUnit ? '°C' : favorite?.weather?.Temperature?.Maximum?.Unit}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
