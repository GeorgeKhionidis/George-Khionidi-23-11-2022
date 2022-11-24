import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';

import {ModalComponent} from '../../../../components/ModalComponent/ModalComponent';
import {SearchInput} from './components/SearchInput/SearchInput';
import {CitiesList} from './components/CitiesList/CitiesList';

import {styles} from './SearchPanel.styles';

import {ICity} from '../../../../types/city';

import {CloseIcon} from '../../../../icons/CloseIcon';

import {
  citiesListSelector,
  citiesLoaderSelector,
  SET_SELECTED_CITY,
} from '../../../../store/slices/citiesSlice';
import {AppDispatch} from '../../../../store';

type IProps = {
  searchVal: string;
  onChangeSearchVal: (val: string) => void;
  selectedCity: ICity;
};

export const SearchPanel: React.FC<IProps> = ({
  searchVal,
  onChangeSearchVal,
  selectedCity,
}) => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();

  const citiesList = useSelector(citiesListSelector);
  const citiesLoader = useSelector(citiesLoaderSelector);

  const handleToggleModal = useCallback(() => {
    setIsModalShown(prev => !prev);
  }, []);

  const handleSelectCity = useCallback(
    (city: ICity) => {
      handleToggleModal();
      dispatch(SET_SELECTED_CITY(city));
    },
    [handleToggleModal, dispatch],
  );

  return (
    <>
      <TouchableOpacity
        style={[styles.searchWrapper, {borderColor: colors.primary}]}
        onPress={handleToggleModal}>
        <Text style={[styles.searchText, {color: colors.primary}]}>
          {selectedCity?.LocalizedName
            ? selectedCity.LocalizedName
            : 'Search city'}
        </Text>
      </TouchableOpacity>
      <ModalComponent visible={isModalShown} onRequestClose={handleToggleModal}>
        <View
          style={[
            styles.modalContainer,
            {paddingTop: insets.top, backgroundColor: colors.background},
          ]}>
          <TouchableOpacity
            style={styles.modalCloseIcon}
            onPress={handleToggleModal}>
            <CloseIcon />
          </TouchableOpacity>
          <SearchInput
            searchVal={searchVal}
            onChangeSearchVal={onChangeSearchVal}
          />
          <CitiesList
            citiesList={citiesList}
            citiesLoader={citiesLoader}
            onSelectCity={handleSelectCity}
          />
        </View>
      </ModalComponent>
    </>
  );
};
