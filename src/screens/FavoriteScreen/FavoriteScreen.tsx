import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {FavoriteItem} from './components/FavoriteItem';

import {IFavorite} from '../../types/favorite';

import {styles} from './FavoriteScreen.styles';

import {IRootNavigator} from '../../navigator/Navigator';
import {FAVORITE_SCREEN, MAIN_SCREEN} from '../../navigator/consts/screens';

import {
  favoriteListSelector,
  SET_FAVORITE_LIST,
} from '../../store/slices/favoriteSlice';
import {SET_SELECTED_CITY} from '../../store/slices/citiesSlice';

type IProps = DrawerScreenProps<IRootNavigator, typeof FAVORITE_SCREEN>;

export const FavoriteScreen: React.FC<IProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const favoriteList: IFavorite[] = useSelector(favoriteListSelector);

  const handleRemoveCityFromFavorite = useCallback(
    (item: IFavorite) => {
      dispatch(SET_FAVORITE_LIST(item));
    },
    [dispatch],
  );
  const handleOpenWeatherByCity = useCallback(
    (favorite: IFavorite) => {
      dispatch(SET_SELECTED_CITY(favorite.city));
      navigation.navigate(MAIN_SCREEN);
    },
    [navigation, dispatch],
  );

  const renderItem = useCallback(
    ({item}: {item: IFavorite}) => {
      return (
        <FavoriteItem
          favorite={item}
          onRemoveCityFromFavorite={handleRemoveCityFromFavorite}
          onOpenWeatherByCity={handleOpenWeatherByCity}
        />
      );
    },
    [handleRemoveCityFromFavorite, handleOpenWeatherByCity],
  );
  const keyExtractor = useCallback(
    (item: IFavorite) => item?.city?.Key?.toString(),
    [],
  );

  const renderListEmptyComponent = useCallback(() => {
    return (
      <View style={styles.emptyWrapper}>
        <Text style={[styles.emptyText, {color: colors.text}]}>
          Favorites list is empty
        </Text>
      </View>
    );
  }, [colors]);

  return (
    <FlatList
      style={styles.wrapper}
      contentContainerStyle={styles.contentContainer}
      data={favoriteList}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={renderListEmptyComponent}
      windowSize={11}
      initialNumToRender={13}
      showsVerticalScrollIndicator={false}
    />
  );
};
