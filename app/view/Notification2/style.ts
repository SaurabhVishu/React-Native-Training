import {StyleSheet} from 'react-native';
import {FONTS} from '../../config/constants';
import {COLORS} from '../../config/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor:COLORS.white
  },
  RenImageContainer: {
    padding: 10,
    backgroundColor:COLORS.primary,
    borderRadius: 12,
    marginRight: 10,
  },
  renImg: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    borderRadius: 12,
    // tintColor:COLORS.primary
  },
  Heading: {
    ...FONTS.h3,
    color: COLORS.black,
  },
  RenItem: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray1,
    borderRadius: 12,
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  title: {
    ...FONTS.h3,
    color: COLORS.black,
  },
  time: {
    color: COLORS.black,
  },
  Subtitle:{
      width:"70%",
  },
});
export default styles;
