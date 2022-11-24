import {StyleSheet} from 'react-native';

import {FONTS} from '../../../styles/fonts';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 13,
    borderBottomWidth: 1,
  },
  rightContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 20,
    fontFamily: FONTS.MEDIUM,
  },
  removeButtonWrapper: {
    marginRight: 20,
    borderWidth: 1,
    padding: 9,
    borderRadius: 6,
  },
  removeButtonText: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
  },
  temperatureText: {
    fontSize: 25,
    fontFamily: FONTS.MEDIUM,
  },
});
