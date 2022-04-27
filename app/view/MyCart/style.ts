import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
    //justifyContent:"space-between"
  },
  renderView: {
    
    backgroundColor: COLORS.lightGray2,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  
  },
  title: {
    ...FONTS.h3,
    color: COLORS.darkGray,
  },
  price: {
    ...FONTS.h4,
    color: COLORS.primary,
  },
  add: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
  addContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  count: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  deleteIcon: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
  swipeView: {
    backgroundColor: COLORS.primary,
    marginTop: 10,
    flex: .15,
    borderRadius: 12,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainMapView:{
    marginVertical: 10,
    borderRadius:12,
    backgroundColor:COLORS.primary,
    justifyContent:"center"
  },
 
  
  ModalViewContainer: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
    marginTop:18,
    borderColor: COLORS.lightGray1,
    backgroundColor:COLORS.white,
    //alignItems:"center"
    
  },
  ModalPriceTextCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.lightGray1,
    borderBottomWidth: 1,
  },
  ModalText: {
    ...FONTS.h3,
    color: COLORS.darkGray,
  },
  Modaltext2: {
    color: COLORS.black,
    ...FONTS.body2,
  },
  ToatalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  Totaltext: {
    ...FONTS.h2,
    color: COLORS.black,
  },
});
export default styles;
