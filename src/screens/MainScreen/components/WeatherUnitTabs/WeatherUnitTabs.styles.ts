import {StyleSheet} from 'react-native';

import {FONTS} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 30,
  },
  tabItemWrapper: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 40,
  },
  tabItemText: {
    fontSize: 17,
    fontFamily: FONTS.REGULAR,
  },
});
