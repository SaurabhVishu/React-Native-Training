import {StyleSheet} from 'react-native';
import {FONTS} from '../../config/constants';
import {COLORS} from '../../config/constants/theme';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 15,
    backgroundColor:COLORS.white
  },
  CardContainer: {},
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  txtAddCard: {
    ...FONTS.h3,
    color: COLORS.black,
  },
  checkoff: {
    height: 25,
    width: 25,
    // tintColor: 'red',
  },
  CardViewContainer: {
    backgroundColor: COLORS.white,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:15,
    borderWidth:1,
    borderColor:COLORS.lightGray1,
    borderRadius:12,
    alignItems:"center"
  },
  ImgTxtContainer: {
    flexDirection: 'row',
    alignItems:"center"
  },
  iconName: {
    ...FONTS.h3,
    color: COLORS.black,
    marginLeft:10
  },
  iconView: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: COLORS.lightGray1,
  },
  signinTxt: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
},
});
export default styles;
