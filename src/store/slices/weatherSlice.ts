import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '..';

import {get_weather_five_days_data} from '../../assets/mock/mock_autocomplete';

// import Api from '../../api/Api';

import {ICity} from '../../types/city';
import {IWeatherForFiveDays} from '../../types/weather';

interface IWeatherSlice {
  weatherLoader: boolean;
  selectedWeather: IWeatherForFiveDays | null;
  weatherUnit: 'Fahrenheit' | 'Celsius';
}

const initialState: IWeatherSlice = {
  weatherLoader: false,
  selectedWeather: null,
  weatherUnit: 'Celsius',
};

export const getWeather = createAsyncThunk(
  '/daily/5day',
  async (selectedCity: ICity, thunkApi) => {
    thunkApi.dispatch(WEATHER_LOADER_START());
    try {
      // const {data} = await Api.weatherApi.getWeatherForFiveDays(
      //   selectedCity.Key,
      // );
      const {data} = await get_weather_five_days_data();
      return data;
    } catch (e) {
      console.error(e);
    } finally {
      thunkApi.dispatch(WEATHER_LOADER_END());
    }
  },
);

const weatherSlice = createSlice({
  name: 'WeatherSlice',
  initialState,
  reducers: {
    WEATHER_LOADER_START: state => {
      state.weatherLoader = true;
    },
    WEATHER_LOADER_END: state => {
      state.weatherLoader = false;
    },
    SET_WEATHER_UNIT: (
      state,
      action: PayloadAction<'Fahrenheit' | 'Celsius'>,
    ) => {
      state.weatherUnit = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getWeather.fulfilled,
      (state, action: PayloadAction<IWeatherForFiveDays>) => {
        state.selectedWeather = action.payload;
      },
    );
  },
});

export const {WEATHER_LOADER_START, WEATHER_LOADER_END, SET_WEATHER_UNIT} =
  weatherSlice.actions;
export default weatherSlice.reducer;

export const selectedWeatherSelector = (state: RootState) =>
  state.weather.selectedWeather;
export const weatherLoaderSelector = (state: RootState) =>
  state.weather.weatherLoader;
export const isCelsiusUnitSelector = (state: RootState) =>
  state.weather.weatherUnit === 'Celsius';
