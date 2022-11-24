import React, {memo} from 'react';
import {TextInput} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {styles} from './SearchInput.styles';

type IProps = {
  searchVal: string;
  onChangeSearchVal: (val: string) => void;
};

export const SearchInput: React.FC<IProps> = memo(
  ({searchVal, onChangeSearchVal}) => {
    const {colors} = useTheme();

    return (
      <TextInput
        value={searchVal}
        onChangeText={onChangeSearchVal}
        style={[
          styles.input,
          {borderColor: colors.primary, color: colors.primary},
        ]}
        autoFocus
        placeholder="Search city"
      />
    );
  },
);
