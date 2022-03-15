import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/constants';
let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  availableBtn: {
    backgroundColor: COLORS.lightOrange3,
    padding: 5,
    borderRadius: 12,
    width: width * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  availableTxt: {
    ...FONTS.h3,
    color: COLORS.primary,
    padding: 5,
  },
  usedBtn: {
    backgroundColor: COLORS.lightOrange3,
    padding: 5,
    width: width * 0.45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 15,
    color: COLORS.gray,
    fontWeight: '400',
    marginVertical: 10,
  },
  iconImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    //   padding:5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  itemSep: {
    margin: 10,
  },
  uperView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainRenderView: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 12,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  time: {
    fontSize: 15,
    color: COLORS.gray,
  },
  subtitle: {
    ...FONTS.h3,
    color: COLORS.green,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  rateButtonContainer: {
    //   backgroundColor:COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  reorderBtn: {
    backgroundColor: COLORS.lightOrange3,
    width: width * 0.38,
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateBtn: {
    backgroundColor: COLORS.lightOrange3,
    width: width * 0.38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btName: {
    fontSize: 17,
    color: COLORS.primary,
  },
});
export default styles;
