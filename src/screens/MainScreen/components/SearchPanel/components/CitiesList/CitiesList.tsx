import React, {memo, useCallback} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {Loader} from '../../../../../../components/Loader/Loader';

import {ICity} from '../../../../../../types/city';

import {styles} from './CitiesList.styles';

type IProps = {
  citiesList: ICity[];
  onSelectCity: (city: ICity) => void;
  citiesLoader: boolean;
};

export const CitiesList: React.FC<IProps> = memo(
  ({citiesList, onSelectCity, citiesLoader}) => {
    const {colors} = useTheme();

    const renderItem = useCallback(
      ({item}: {item: ICity}) => {
        return (
          <TouchableOpacity
            style={styles.itemWrapper}
            onPress={() => onSelectCity(item)}>
            <Text style={[styles.itemText, {color: colors.text}]}>
              {item?.LocalizedName}
            </Text>
          </TouchableOpacity>
        );
      },
      [colors, onSelectCity],
    );
    const keyExtractor = useCallback(
      (item: ICity) => item?.Key?.toString(),
      [],
    );

    const renderListEmptyComponent = useCallback(() => {
      return (
        <Text style={[styles.emptyText, {color: colors.text}]}>
          No city found for your search
        </Text>
      );
    }, [colors]);

    return (
      <View style={styles.rootWrapper}>
        {citiesLoader ? (
          <Loader color={colors.text} size="large" />
        ) : (
          <FlatList
            style={styles.wrapper}
            contentContainerStyle={styles.contentContainer}
            data={citiesList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={renderListEmptyComponent}
            windowSize={11}
            initialNumToRender={13}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    );
  },
);
