import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../config/constants";

const styles = StyleSheet.create({
    container: {
        //  alignContent:'center',
        //  justifyContent:'center',
        flex: 1,
        //padding:15,
        backgroundColor:"white"
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
        padding:15
  
    },
    unSelectBtn:{
        borderRadius:12,
        padding:15,
        width:"45%",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:COLORS.white
      },
      unselectBtnName:{
        fontSize:18,
        fontWeight:"bold",
        color:COLORS.gray
      },

    RenContainer:{
         flex:1,
         width:SIZES.width
    },
    btnName:{
       // ...FONTS.h3
       fontSize:18,
       fontWeight:"bold",
       color:COLORS.white

    },

    backgroundimage: {
        // flex: 1,
        resizeMode:"stretch",
         position:"absolute",
        alignItems: "center",
        height: SIZES.height * 0.55,
         width: SIZES.width 
        


    },
    bannerImage: {
      top:SIZES.height*.25,
      height:"50%",
      width:"50%",
      position:"absolute",
      resizeMode:"contain"



    },

    title: {
       textAlign: "center",
      //  marginLeft:30,
        fontSize: SIZES.h1,
        color:"black",
        fontWeight:"bold"

    },
    description: {
     // width:300,
     textAlign:"center",
     fontSize:SIZES.h3,
     marginHorizontal:15

    }

})

export default styles