import axios, {AxiosError} from 'axios';

import CitiesApi from './CitiesApi/CitiesApi';
import WeatherApi from './WeatherApi/WeatherApi';

import {BASE_URL} from '../helpers/consts';
import {showErrorMessage} from '../helpers/toastHelper';

axios.interceptors.request.use(
  config => {
    return {
      ...config,
      baseURL: BASE_URL,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers':
          'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
      },
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    showErrorMessage({
      message: 'Error response',
      description: JSON.stringify(error),
    });
    throw error;
  },
);

class Api {
  citiesApi = new CitiesApi();
  weatherApi = new WeatherApi();
}

export default new Api();
