import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../config/constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  mapStyle: {
    flex: 1,
    //height:"50%"
  },
  btnContainer:{
    padding: 8,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  btnName:{
      ...FONTS.h3,
      color:COLORS.white
  },
  callBtn:{
    backgroundColor:COLORS.primary,
    flexDirection:"row",padding:10,
    borderRadius:12,
    marginVertical:15
  },
  deliveryText:{
      fontSize:15,
      color:COLORS.white
  },
  profile:{
      height:45,
      width:45,
      resizeMode:"contain",
      borderRadius:15
  },
  btn: {
    padding: 8,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gray',

  },
  upperModalView:{
      flex:0.7
  },
  title:{
    fontSize:18,
    color:COLORS.gray,
  },
  time:{
      ...FONTS.h3,
      color:COLORS.black
  },
  textContainer:{
      marginLeft:15
  },
  mapContainer:{
    backgroundColor: 'white',
    flex: 0.3,
    borderWidth: 2,
    borderColor: 'gray',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 15,
  },
  mapItem:{
    flexDirection:"row",
    alignItems:"center"
  },
  btnIconImgContainer:{
      flexDirection:"row"
  },
  btnTextContainer:{
      marginLeft:15
  },
  headerIcon:{
    height: 25,
     width: 25
  },
});
export default styles;
