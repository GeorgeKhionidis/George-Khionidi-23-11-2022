import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '..';

import {showSuccessMessage} from '../../helpers/toastHelper';

import {IFavorite} from '../../types/favorite';

interface IFavoriteSlice {
  favoriteList: IFavorite[];
}

const initialState: IFavoriteSlice = {
  favoriteList: [],
};

const favoriteSlice = createSlice({
  name: 'FavoriteSlice',
  initialState,
  reducers: {
    SET_FAVORITE_LIST: (state, action: PayloadAction<IFavorite>) => {
      if (
        state.favoriteList.some(
          favorite => favorite.city.Key === action.payload.city.Key,
        )
      ) {
        state.favoriteList = state.favoriteList.filter(
          favorite => favorite.city.Key !== action.payload.city.Key,
        );
        showSuccessMessage({
          message: 'City removed from favorites successfully',
        });
      } else {
        state.favoriteList = [...state.favoriteList, action.payload];
        showSuccessMessage({message: 'City ​​added to favorites successfully'});
      }
    },
  },
});

export const {SET_FAVORITE_LIST} = favoriteSlice.actions;
export default favoriteSlice.reducer;

export const favoriteListSelector = (state: RootState) =>
  state.favorite.favoriteList;
export const isSelectedCityInFavoriteSelector = (state: RootState) =>
  state.favorite.favoriteList.some(
    favorite => favorite.city.Key === state.cities.selectedCity.Key,
  );
