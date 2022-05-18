import { StyleSheet} from "react-native";
import { COLORS, FONTS } from "../../config/constants";

const styles=StyleSheet.create({
    mainContainer:{
         backgroundColor:COLORS.white,
          flexDirection:"row",
          padding:5,
        justifyContent:"space-between",
         alignItems:"center"
        

    },
icon:{
    height:25,
    width:25,
     tintColor:COLORS.white
},
btnContainer:{
    flexDirection:"row",
    margin:5,
    backgroundColor:COLORS.primary,
    padding:10,
    borderRadius:15,
    alignItems:"center"
},
title:{
    ...FONTS.h3,
    color:COLORS.white,
    marginLeft:5

},
FbtnContainer:{
    flexDirection:"row",
    margin:5,
    alignItems:"center",
},
iconFales:{
    height:20,
    width:20,
     tintColor:COLORS.gray
},
})

export default styles