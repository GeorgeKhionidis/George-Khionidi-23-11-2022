import {StyleSheet} from 'react-native';

import {COLORS} from '../../../styles/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    color: COLORS.ERROR_TEXT,
  },
});
