import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from "../../config/constants";

const styles=StyleSheet.create({
mainContainer:{
flex:1,
backgroundColor:COLORS.white,
padding:15,
justifyContent:"space-between"
},
eye:{
    height:20,
    width:20,
    marginRight:5,tintColor:COLORS.gray
},
mapContainer:{
    marginVertical:10,
    backgroundColor:COLORS.lightGray2,
    padding:15,
    borderRadius:12
},
label:{
    fontSize:15,
    color:COLORS.gray,
    marginVertical:5,
    fontWeight:"bold"
},
textinputView:{
    backgroundColor:"white",
    borderRadius:7,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:5
},

})
export default styles