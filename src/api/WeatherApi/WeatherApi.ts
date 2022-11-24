import axios from 'axios';

import {API_KEY} from '../../helpers/consts';

export default class WeatherApi {
  async getWeatherForFiveDays(cityKey: string) {
    return axios.get(`/forecasts/v1/daily/5day/${cityKey}`, {
      params: {apikey: API_KEY},
    });
  }
}
