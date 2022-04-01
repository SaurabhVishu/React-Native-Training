import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
  },
  sapceView:{
    justifyContent: 'space-between',
     flex: 1
  },
  header: {
    ...FONTS.h2,
    color: COLORS.black,
    textAlign: 'center',
  },
  heading: {
    ...FONTS.h3,
    color: COLORS.darkGray,
    textAlign: 'center',
    // marginVertical:5
  },
  textContainer: {
    marginHorizontal: 10,
  },
  date: {
    ...FONTS.h2,
    color: COLORS.black,
    textAlign: 'center',
  },
  headerContainer: {
    marginVertical: 5,
  },
  uperCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  mainCardView: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 12,
    marginVertical:10
    // padding:10
  },
  seprator: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray1,
  },
  trackOrder: {
    ...FONTS.h3,
    color: COLORS.black,
  },
  btnName:{
    fontSize:18,
    fontWeight:"bold",
    color:COLORS.white
  },
  
  code: {
    ...FONTS.body3,
    color: COLORS.gray,
  },
  check: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    // tintColor:COLORS.primary
  },
  selectCheck:{
    height: 35,
    width: 35,
    resizeMode: 'contain',
     tintColor:COLORS.primary
  },
  iconContainer: {
    flexDirection: 'row',
   
  },
  title: {
    ...FONTS.h3,
    color: COLORS.black,
  },
  subtitle: {
    ...FONTS.body3,
    color: COLORS.lightGray1,
  },
  dottedView: {
    borderColor: COLORS.gray,
    height: 40,
    borderEndWidth: 3,
    width: 2,
    borderStyle: 'dashed',
  },
  selectDottedLine:{
    borderColor: COLORS.primary,
    height: 40,
    borderEndWidth: 3,
    width: 2,
    borderStyle: 'solid',
  },
  btn:{
      backgroundColor:COLORS.primary,
      borderRadius:12,
      padding:15,
      width:"45%",
      flexDirection:"row",
      justifyContent:"center"

  },
  btnContainer:{
      flexDirection:"row",
      justifyContent:"space-between",

  },
  mapIcon:{
      height:25,
      width:25,
      marginRight:10
  },
  selectMapIcon:{
    height:25,
    width:25,
    marginRight:10,
    tintColor:COLORS.primary
  },
  mapContainer:{
      padding:12
  },
  iconLineContainer:{
      alignItems:"center"
  },
  unSelectBtn:{
    borderRadius:12,
    padding:15,
    width:"45%",
    flexDirection:"row",
    justifyContent:"center",
    backgroundColor:COLORS.lightGray1
  },
  unselectBtnName:{
    fontSize:18,
    fontWeight:"bold",
    color:COLORS.primary
  },
});
export default styles;
