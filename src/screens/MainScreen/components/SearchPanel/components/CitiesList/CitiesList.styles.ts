import {StyleSheet} from 'react-native';

import {COLORS} from '../../../../../../styles/colors';
import {FONTS} from '../../../../../../styles/fonts';

export const styles = StyleSheet.create({
  itemWrapper: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  itemText: {
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
  },
  rootWrapper: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
  },
  emptyText: {
    fontFamily: FONTS.REGULAR,
    fontSize: 16,
  },
});
