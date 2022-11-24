import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ICity} from '../../types/city';
import {RootState} from '..';

// import Api from '../../api/Api';
import {get_cities_data} from '../../assets/mock/mock_autocomplete';

const TEL_AVIV: ICity = {
  Version: 1,
  Key: '215854',
  Type: 'City',
  Rank: 31,
  LocalizedName: 'Tel Aviv',
  Country: {
    ID: 'IL',
    LocalizedName: 'Israel',
  },
  AdministrativeArea: {
    ID: 'TA',
    LocalizedName: 'Tel Aviv',
  },
};

interface ICitiesSlice {
  citiesList: ICity[];
  citiesLoader: boolean;
  selectedCity: ICity;
}

const initialState: ICitiesSlice = {
  citiesList: [],
  citiesLoader: false,
  selectedCity: TEL_AVIV,
};

export const getCities = createAsyncThunk(
  '/autocomplete',
  async (val: string, thunkApi) => {
    thunkApi.dispatch(CITIES_LOADER_START());
    try {
      // const {data} = await Api.citiesApi.getCityAutocomplete(val);
      const {data} = await get_cities_data();
      return data;
    } catch (e) {
      console.error(e);
    } finally {
      thunkApi.dispatch(CITIES_LOADER_END());
    }
  },
);

const citiesSlice = createSlice({
  name: 'CitiesSlice',
  initialState,
  reducers: {
    CITIES_LOADER_START: state => {
      state.citiesLoader = true;
    },
    CITIES_LOADER_END: state => {
      state.citiesLoader = false;
    },
    SET_SELECTED_CITY: (state, action: PayloadAction<ICity>) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getCities.fulfilled,
      (state, action: PayloadAction<ICity[]>) => {
        state.citiesList = action.payload;
      },
    );
  },
});

export const {CITIES_LOADER_END, CITIES_LOADER_START, SET_SELECTED_CITY} =
  citiesSlice.actions;

export default citiesSlice.reducer;

export const citiesListSelector = (state: RootState) => state.cities.citiesList;
export const citiesLoaderSelector = (state: RootState) =>
  state.cities.citiesLoader;
export const selectedCitySelector = (state: RootState) =>
  state.cities.selectedCity;
