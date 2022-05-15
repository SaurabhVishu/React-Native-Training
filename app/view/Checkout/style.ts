import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONTS } from "../../config/constants";

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:15,
        backgroundColor:COLORS.white
    },
    CardViewContainer: {
        // backgroundColor: COLORS.lightGray2,
         marginVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:15,
        borderWidth:2,
        borderColor:COLORS.lightGray1,
        borderRadius:12,
        alignItems:"center",

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
      checkoff: {
        height: 25,
        width: 25,
        // tintColor: 'red',
      },
      MainModalview:{
        flex:1,
      },
      upperModalView:{
        flex:0.78,
      },
      icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
      },
      DelAdds:{
          marginVertical:10,
          ...FONTS.h3,
          color:COLORS.black,
      },
      locationIcon:{
          height:45,
          width:45,
      },
      locDetailView:{
         flexDirection:"row", 
         borderWidth:2,
         borderRadius:12,
         padding:10,
         marginVertical:5,
          borderColor:COLORS.lightGray1,
         alignItems:"center"
      },
      LocDetail:{
          ...FONTS.h3,
          color:COLORS.darkGray,
          marginLeft:10,
          
      },
      discount: {
        height: 35,
        width: 35,
        marginRight:1,
        
        
    },
    couponContainer: {
        backgroundColor:COLORS.primary,
        flexDirection: "row",
        borderRadius: 10,
        justifyContent: "center",
        // alignItems: "center",
        borderWidth:1,
        borderColor:COLORS.lightGray1
    },
    textInput: {
      flex:1,
      // height: 40,
      width: "90%",
      // marginTop: 10,
      borderRadius: 9,
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
      backgroundColor:"white"
    
  },
  discounCont:{
    // backgroundColor:COLORS.primary,
    justifyContent:"center",
    padding:5

  //   borderTopRightRadius:5,
  // borderBottomRightRadius:5
},
ModalViewContainer:{
  borderWidth: 1, 
  borderRadius: 12,
   flex: 0.25,
   padding:15,
   borderColor:COLORS.lightGray1,
   backgroundColor:COLORS.white,
},
ModalPriceTextCont:{
  flexDirection:"row",
  justifyContent:"space-between",
  borderBottomColor:COLORS.lightGray1,
  borderBottomWidth:1,

},
ModalText:{
  ...FONTS.h3,
  color:COLORS.darkGray
},
Modaltext2:{
  color:COLORS.black,
  ...FONTS.body2,
},
ToatalContainer:{
flexDirection:"row",
justifyContent:"space-between",
marginVertical:10,
},
Totaltext:{
  ...FONTS.h2,
  color:COLORS.black,
},

})
export default styles