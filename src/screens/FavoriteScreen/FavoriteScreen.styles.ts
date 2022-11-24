import {StyleSheet} from 'react-native';

import {FONTS} from '../../styles/fonts';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  emptyWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontFamily: FONTS.REGULAR,
  },
});
