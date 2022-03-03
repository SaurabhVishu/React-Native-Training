import {StyleSheet} from 'react-native';
import {FONTS} from '../../config/constants';
import {COLORS} from '../../config/constants/theme';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  Congratulation: {
    ...FONTS.h1,
    color: COLORS.black,
    // marginVertical:10
  },
  SuccessImg: {
    height: '40%',
    width: '40%',
    resizeMode: 'contain',
    marginVertical: 10,
  },
  PaymentSuccessText: {
    ...FONTS.h3,
    color: COLORS.darkGray,
    marginVertical: 2,
  },
  UpperView: {flex: 0.65, justifyContent: 'flex-end', alignItems: 'center'},
  LowerView: {
    flex: 0.35,
  },
});
export default styles;
