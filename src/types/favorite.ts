import {ICity} from './city';
import {IWeather} from './weather';

export type IFavorite = {
  weather?: IWeather;
  city: ICity;
};
