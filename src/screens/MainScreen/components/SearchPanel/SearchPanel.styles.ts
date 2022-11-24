import {StyleSheet} from 'react-native';

import {FONTS} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  modalCloseIcon: {
    alignSelf: 'flex-end',
    marginBottom: 14,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  searchWrapper: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
  },
  searchText: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: FONTS.REGULAR,
  },
});
