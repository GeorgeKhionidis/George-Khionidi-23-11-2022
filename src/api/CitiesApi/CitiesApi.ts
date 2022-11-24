import axios from 'axios';

import {API_KEY} from '../../helpers/consts';

export default class CitiesApi {
  async getCityAutocomplete(searchVal: string) {
    return axios.get('/locations/v1/cities/autocomplete', {
      params: {q: searchVal, apikey: API_KEY},
    });
  }
}
