import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
  },
  spaceView:{
      flex:1,
      justifyContent:"space-between",
  },
  card: {
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  imageBackground: {
    height: 170,
    width: 360,
    borderRadius: 12,
    position: 'absolute',
  },

  apple: {
    height: 40,
    width: 35,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  eye: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  CardNameConatainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  text: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  CardNumText: {
    ...FONTS.body4,
    color: COLORS.white,
    marginHorizontal:10
  },
  textInputContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical:5
  },
  label: {
    color: COLORS.darkGray,
    ...FONTS.h4,
    marginVertical: 5,
  },
  inputMainContainer: {
    marginVertical: 10,
    //  backgroundColor:"yellow"
  },
  expiryDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '48%',
  },
  inputBox: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  remeberTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkONN: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
});

export default styles;
