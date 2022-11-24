import {StyleSheet} from 'react-native';

import {FONTS} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  todayWeatherWrapper: {
    marginTop: 40,
  },
  todayWeatherName: {
    fontSize: 24,
    fontFamily: FONTS.MEDIUM,
    textAlign: 'center',
  },
  todayWeatherDate: {
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
    textAlign: 'center',
    marginTop: 7,
  },
  todayWeatherTemperature: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 25,
    fontFamily: FONTS.MEDIUM,
  },
  favoriteWrapper: {
    padding: 6,
    borderWidth: 1,
    width: '50%',
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  favoriteText: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
  },
  weatherName: {
    fontSize: 21,
    fontFamily: FONTS.MEDIUM,
    textAlign: 'center',
  },
  weatherDate: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    marginTop: 5,
  },
  weatherTemperature: {
    marginTop: 8,
    fontSize: 21,
    fontFamily: FONTS.MEDIUM,
  },
  fiveDaysListWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  fiveDaysItemWrapper: {
    width: '40%',
    marginTop: 40,
    alignItems: 'center',
  },
});
